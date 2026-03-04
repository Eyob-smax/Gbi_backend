import { createPrismaClient } from "../models/DatabaseConfig.js";
import { asyncHandler } from "../utils/util.js";
import { JoiValidator } from "../utils/util.js";

const schema = JoiValidator();
const prisma = createPrismaClient().client;

// Thuiss is for Helper to check invalid studentid format
const validateStudentIdFormat = (id, res) => {
  if (id.includes("/")) {
    return res.status(400).json({
      success: false,
      message:
        "Invalid Student ID format. Use hyphen (-) instead of slash (/).",
    });
  }
  return null;
};

const addUser = asyncHandler(async (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  const validationError = validateStudentIdFormat(value.studentid, res);
  if (validationError) return validationError;

  const existingUser = await prisma.user.findUnique({
    where: { studentid: value.studentid },
  });
  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists!" });
  }

  const data = value;
  const participation = data.universityusers.participation;

  const user = await prisma.user.create({
    data: {
      ...data,
      birthdate: new Date(data.birthdate),
      universityusers: {
        create: {
          ...data.universityusers,
          role: participation === "None" ? "None" : data.universityusers.role,
          batch: Number(data.universityusers.batch),
        },
      },
    },
    include: { universityusers: true },
  });

  res.status(201).json({
    success: true,
    user: {
      ...user,
      birthdate: user.birthdate.toISOString(),
    },
  });
});

const updateUser = asyncHandler(async (req, res) => {
  const studentId = req.params?.id;
  if (!studentId) {
    return res
      .status(400)
      .json({ success: false, message: "Student ID is required" });
  }

  const validationError = validateStudentIdFormat(studentId, res);
  if (validationError) return validationError;

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  const existingUser = await prisma.user.findUnique({
    where: { studentid: studentId },
    include: { universityusers: true },
  });

  if (!existingUser) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const participation = value.universityusers.participation;

  const updatedUser = await prisma.user.update({
    where: { studentid: studentId },
    data: {
      ...value,
      birthdate: new Date(value.birthdate),
      universityusers: {
        update: {
          where: { userid: existingUser.userid }, // Fixed: use existing userid
          data: {
            ...value.universityusers,
            batch: Number(value.universityusers.batch),
            role:
              participation === "None" ? "None" : value.universityusers.role,
            confessionfather:
              value.universityusers.confessionfather ??
              existingUser.universityusers.confessionfather,
            mealcard:
              value.universityusers.mealcard ??
              existingUser.universityusers.mealcard,
            emergencyname:
              value.universityusers.emergencyname ??
              existingUser.universityusers.emergencyname,
            emergencyphone:
              value.universityusers.emergencyphone ??
              existingUser.universityusers.emergencyphone,
            cafeterianame:
              value.universityusers.cafeterianame ??
              existingUser.universityusers.cafeterianame,
          },
        },
      },
    },
    include: { universityusers: true },
  });

  res.json({
    success: true,
    updatedUser: {
      ...updatedUser,
      birthdate: updatedUser.birthdate.toISOString(),
    },
  });
});
// after this i refactor some of the codes for pagination fetch from the server
const getUsers = asyncHandler(async (req, res) => {
  // pagination parameters: page and limit (defaults)
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = (page - 1) * limit;

  // count total users so frontend can calculate pages
  const totalUsers = await prisma.user.count();

  const users = await prisma.user.findMany({
    orderBy: { userid: "desc" },
    skip: offset,
    take: limit,
    include: { universityusers: true },
  });

  const formatted = users.map((u) => ({
    ...u,
    birthdate: u.birthdate.toISOString(),
  }));

  const totalPages = limit > 0 ? Math.ceil(totalUsers / limit) : 1;
  const hasNext = page < totalPages;
  const hasPrev = page > 1;

  res.status(200).json({
    success: true,
    users: formatted,
    pagination: {
      totalUsers,
      totalPages,
      currentPage: page,
      limit,
      hasNext,
      hasPrev,
      nextUrl: hasNext ? `/user?page=${page + 1}&limit=${limit}` : undefined,
      prevUrl: hasPrev ? `/user?page=${page - 1}&limit=${limit}` : undefined,
    },
  });
});

const getUser = asyncHandler(async (req, res) => {
  const studentId = req.params.id;
  if (!studentId) {
    return res
      .status(400)
      .json({ success: false, message: "Student ID is required" });
  }

  const validationError = validateStudentIdFormat(studentId, res);
  if (validationError) return validationError;

  const user = await prisma.user.findUnique({
    where: { studentid: studentId },
    include: { universityusers: true },
  });

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  res.json({
    success: true,
    user: {
      ...user,
      birthdate: user.birthdate.toISOString(),
    },
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  const studentId = req.params.id;
  if (!studentId) {
    return res
      .status(400)
      .json({ success: false, message: "Student ID is required" });
  }

  const validationError = validateStudentIdFormat(studentId, res);
  if (validationError) return validationError;

  const userExists = await prisma.user.findUnique({
    where: { studentid: studentId },
  });

  if (!userExists) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  await prisma.user.delete({
    where: { studentid: studentId },
  });

  res.status(200).json({ success: true, message: "User deleted successfully" });
});

const deleteAllUsers = asyncHandler(async (req, res) => {
  const count = await prisma.user.count();
  if (count === 0) {
    return res.status(404).json({ success: false, message: "No users found" });
  }

  await prisma.user.deleteMany({});
  res
    .status(200)
    .json({ success: true, message: "All users deleted successfully" });
});

const getAnalytics = asyncHandler(async (req, res) => {
  const total = await prisma.user.count();

  // This is just like fetch participation and role for all users' university record
  const uniRecords = await prisma.user.findMany({
    select: {
      universityusers: { select: { participation: true, role: true } },
    },
  });

  let participatingCount = 0;
  let activeCount = 0;
  const participationBreakdown = {};

  uniRecords.forEach((r) => {
    const u = r.universityusers || {};
    const participation = u.participation ?? "None";
    const role = u.role ?? "None";

    if (participation !== "None") participatingCount += 1;
    if (role !== "None") activeCount += 1;

    participationBreakdown[participation] =
      (participationBreakdown[participation] || 0) + 1;
  });

  const participationRate =
    total === 0 ? 0 : Number(((participatingCount / total) * 100).toFixed(2));

  res.status(200).json({
    success: true,
    analytics: {
      total,
      activeUsers: activeCount,
      participating: participatingCount,
      participationRate,
      participationBreakdown,
    },
  });
});

export {
  getUser,
  updateUser,
  getUsers,
  addUser,
  deleteUser,
  deleteAllUsers,
  getAnalytics,
};
