import { asyncHandler } from "../utils/util.js";
import { prisma } from "../models/DatabaseConfig.js";
import { JoiValidator } from "../utils/util.js";
const schema = JoiValidator();

const addUser = asyncHandler(async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }
  if (req.body?.studentid.includes("/")) {
    return res.status(400).json({
      success: false,
      message: "Please only USE Hyphen(-), for Student Id",
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: { studentid: req.body.studentid },
  });

  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, message: "User already existed!" });
  }
  const user = await prisma.user.create({
    data: {
      studentid: req.body?.studentid,
      firstname: req.body?.firstname,
      middlename: req.body?.middlename,
      lastname: req.body?.lastname,
      telegram_username: req.body?.telegram_username,
      gender: req.body?.gender,
      baptismalname: req.body?.baptismalname,
      phone: req.body?.phone,
      birthdate: new Date(req.body?.birthdate),
      useremail: req.body?.useremail,
      nationality: req.body?.nationality,
      region: req.body?.region,
      mothertongue: req.body?.mothertongue,
      zonename: req.body?.zonename,
      isphysicallydisabled: req.body?.isphysicallydisabled,
      clergicalstatus: req.body?.clergicalstatus,
      universityusers: {
        create: {
          departmentname: req.body?.universityusers?.departmentname,
          coursetaken: req.body?.universityusers?.coursetaken,
          sponsorshiptype: req.body?.universityusers?.sponsorshiptype,
          participation: req.body?.universityusers?.participation,
          batch: Number(req.body?.universityusers?.batch),
          confessionfather: req.body?.universityusers?.confessionfather || null,
          advisors: req.body?.universityusers?.advisors,
          role:
            req.body?.universityusers?.participation === "None"
              ? "None"
              : req.body?.universityusers?.role,
          mealcard: req.body?.universityusers?.mealcard || "non",
          cafeteriaaccess: req.body?.universityusers?.cafeteriaaccess,
          holidayincampus: req.body?.universityusers?.holidayincampus,
          tookcourse: req.body?.universityusers?.tookcourse,
          activitylevel: req.body?.universityusers?.activitylevel,
        },
      },
    },
    include: {
      universityusers: true,
    },
  });

  res.status(201).json({
    success: true,
    user: { ...user, birthdate: new Date(user.birthdate) },
  });
});

const getUsers = asyncHandler(async (req, res) => {
  const [users] = await Promise.all([
    prisma.user.findMany({
      orderBy: { userid: "desc" },
      include: { universityusers: true },
    }),
  ]);

  res.status(200).json({
    success: true,
    users,
  });
});

const updateUser = asyncHandler(async (req, res) => {
  const studentId = req.params?.id;
  if (!studentId)
    return res
      .status(400)
      .json({ success: false, message: "Invalid ID format" });
  if (studentId.includes("/")) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format, hint: don't use / use - instead!",
    });
  }

  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  const existingUser = await prisma.user.findUnique({
    where: { studentid: studentId },
    include: { universityusers: true },
  });

  if (!existingUser)
    return res.status(404).json({ success: false, message: "User not found" });

  const updatedUser = await prisma.user.update({
    where: { studentid: studentId },
    data: {
      studentid: req.body.studentid,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      telegram_username: req.body?.telegram_username,
      gender: req.body.gender,
      baptismalname: req.body.baptismalname,
      phone: req.body.phone,
      birthdate: new Date(req.body.birthdate),
      useremail: req.body.useremail,
      nationality: req.body.nationality,
      mothertongue: req.body.mothertongue,
      zonename: req.body.zonename,
      isphysicallydisabled: req.body.isphysicallydisabled,
      region: req.body?.region,
      clergicalstatus: req.body?.clergicalstatus,
      universityusers: {
        update: {
          where: {
            userid: req.body?.userid,
          },
          data: {
            departmentname: req.body?.universityusers.departmentname,
            sponsorshiptype: req.body?.universityusers?.sponsorshiptype,
            participation: req.body?.universityusers?.participation,
            batch: Number(req.body?.universityusers?.batch),
            coursetaken: req.body?.universityusers?.coursetaken,
            confessionfather:
              req.body?.universityusers?.confessionfather !== undefined
                ? req.body?.universityusers?.confessionfather
                : existingUser.universityusers?.confessionfather,
            advisors: req.body?.universityusers?.universityusers?.advisors,
            role: req.body?.universityusers?.role,
            mealcard: req.body?.universityusers?.mealcard,
            cafeteriaaccess: req.body?.universityusers?.cafeteriaaccess,
            holidayincampus: req.body?.universityusers?.holidayincampus,
            tookcourse: req.body?.universityusers?.tookcourse,
            activitylevel: req.body?.universityusers?.activitylevel,
          },
        },
      },
    },
    include: {
      universityusers: true,
    },
  });

  res.json({
    success: true,
    updatedUser: { ...updatedUser, birthdate: new Date(updatedUser.birthdate) },
  });
});

const getUser = asyncHandler(async (req, res) => {
  const studentId = req.params.id;

  if (!studentId) return res.status(400).json({ error: "Invalid ID" });
  if (id.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead",
    });
  const user = await prisma.user.findUnique({
    where: { studentid: studentId },
    include: { universityusers: true },
  });

  if (!user) return res.status(404).json({ error: "User not found" });

  res.json({ success: true, user });
});

const deleteUser = asyncHandler(async (req, res) => {
  const studentId = req.params.id;
  if (!studentId) {
    return res.status(400).json({ success: false, message: "ID not found" });
  }

  if (studentId.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead",
    });

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
  const users = await prisma.user.findMany();

  if (users.length === 0) {
    return res.status(404).json({ success: false, message: "No users found" });
  }

  await prisma.user.deleteMany({});
  res
    .status(200)
    .json({ success: true, message: "All users deleted successfully" });
});

export { getUser, updateUser, getUsers, addUser, deleteUser, deleteAllUsers };
