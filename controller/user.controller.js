import { asyncHandler } from "../utils/util.js";
import { prisma } from "../models/DatabaseConfig.js";
import { JoiValidator } from "../utils/util.js";
const schema = JoiValidator();

const addUser = asyncHandler(async (req, res) => {
  const { error } = schema.validate(req.body);
  console.log(req.body);
  if (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
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
      gender: req.body?.gender,
      baptismalname: req.body?.baptismalname,
      phone: req.body?.phone,
      birthdate: new Date(req.body?.birthdate),
      useremail: req.body?.useremail,
      nationality: req.body?.nationality,
      regionnumber: req.body?.regionnumber,
      mothertongue: req.body?.mothertongue,
      zonename: req.body?.zonename,
      isphysicallydisabled: req.body?.isphysicallydisabled,
      universityusers: {
        create: {
          departmentname: req.body?.universityusers?.departmentname,
          sponsorshiptype: req.body?.universityusers?.sponsorshiptype,
          participation: req.body?.universityusers?.participation,
          batch: req.body?.universityusers?.batch,
          confessionfather: req.body?.universityusers?.confessionfather || null,
          advisors: req.body?.universityusers?.advisors,
          role:
            req.body?.universityusers?.participation === "None"
              ? "None"
              : req.body?.universityusers?.role,
          mealcard: req.body?.universityusers?.mealcard || "non",
          cafeteriaaccess: !!req.body?.universityusers?.mealcard,
        },
      },
    },
    include: {
      universityusers: true,
    },
  });

  res.status(201).json({ success: true, user });
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
  const studentId = req.params.id;
  if (!studentId) return res.status(400).json({ error: "Invalid ID format" });
  if (studentId.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead!",
    });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const existingUser = await prisma.user.findUnique({
    where: { studentid: studentId },
    include: { universityusers: true },
  });

  if (!existingUser) return res.status(404).json({ error: "User not found" });

  const updatedUser = await prisma.user.update({
    where: { studentid: studentId },
    data: {
      studentid: req.body.studentid || existingUser.studentid,
      firstname: req.body.firstname || existingUser.firstname,
      middlename: req.body.middlename || existingUser.middlename,
      lastname: req.body.lastname || existingUser.lastname,
      gender: req.body.gender || existingUser.gender,
      baptismalname: req.body.baptismalname || existingUser.baptismalname,
      phone: req.body.phone || existingUser.phone,
      birthdate: req.body.birthdate
        ? new Date(req.body.birthdate)
        : existingUser.birthdate,
      useremail: req.body.useremail || existingUser.useremail,
      nationality: req.body.nationality || existingUser.nationality,
      regionnumber: req.body.regionnumber || existingUser.regionnumber,
      universityusers: {
        update: {
          where: {
            id: existingUser.universityusers[0]?.id,
          },
          data: {
            departmentname:
              req.body.departmentname ||
              existingUser.universityusers[0]?.departmentname,
            sponsorshiptype:
              req.body.sponsorshiptype ||
              existingUser.universityusers[0]?.sponsorshiptype,
            participation:
              req.body.participation ||
              existingUser.universityusers[0]?.participation,
            batch: req.body.batch || existingUser.universityusers[0]?.batch,
            confessionfather:
              req.body.confessionfather !== undefined
                ? req.body.confessionfather
                : existingUser.universityusers[0]?.confessionfather,
            advisors:
              req.body.isAdvisor || existingUser.universityusers[0]?.advisors,
            role: req.body.roleType || existingUser.universityusers[0]?.role,
            mealcard:
              req.body.mealCard !== undefined
                ? req.body.mealCard
                : existingUser.universityusers[0]?.mealcard,
            cafeteriaaccess:
              req.body.mealCard !== undefined
                ? !!req.body.mealCard
                : existingUser.universityusers[0]?.cafeteriaaccess,
          },
        },
      },
    },
    include: {
      universityusers: true,
    },
  });

  res.json({ success: true, updatedUser });
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

export { getUser, updateUser, getUsers, addUser, deleteUser };
