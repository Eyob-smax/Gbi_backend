import { createPrismaClient } from "../models/DatabaseConfig.js";
import { asyncHandler } from "../utils/util.js";
import { JoiValidator } from "../utils/util.js";

const schema = JoiValidator();
const prisma = createPrismaClient().client;

// Helper to check invalid studentid format
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

const getUsers = asyncHandler(async (req, res) => {
  const users = await prisma.user.findMany({
    orderBy: { userid: "desc" },
    include: { universityusers: true },
  });

  const formatted = users.map((u) => ({
    ...u,
    birthdate: u.birthdate.toISOString(),
  }));

  res.status(200).json({ success: true, users: formatted });
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

export { getUser, updateUser, getUsers, addUser, deleteUser, deleteAllUsers };
