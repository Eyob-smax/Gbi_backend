import { prisma } from "../models/DatabaseConfig.js";
import { JoiAdminValidator } from "../utils/util.js";
import { asyncHandler } from "../utils/util.js";
import buildToken from "../middleware/adminAuth.js";
import { hashPassword, comparePassword } from "../utils/util.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const schema = JoiAdminValidator();

// ✅ Register Admin
const registerAdmin = asyncHandler(async (req, res) => {
  const { studentid, adminusername, adminpassword } = req.body;

  if (!studentid || !adminusername || !adminpassword) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  const isAdminExist = await prisma.admin.findUnique({ where: { studentid } });
  if (isAdminExist) {
    return res
      .status(400)
      .json({ success: false, message: "Admin already exists" });
  }

  const admin = await prisma.admin.create({
    data: {
      studentid,
      adminusername,
      adminpassword: await hashPassword(adminpassword),
    },
  });

  res.status(201).json({ success: true, message: "Admin created", admin });
});

const logAdmin = asyncHandler(async (req, res) => {
  const { studentid, adminpassword } = req.body;

  if (!studentid || !adminpassword) {
    return res
      .status(400)
      .json({ success: false, message: "Missing credentials" });
  }

  const admin = await prisma.admin.findUnique({ where: { studentid } });
  if (!admin || !(await comparePassword(admin.adminpassword, adminpassword))) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  buildToken(res, admin.studentid, admin.adminusername);

  const adminObject = {
    studentid: admin.studentid,
    adminusername: admin.adminusername,
    createdAt: admin.createdAt.toISOString(),
    isSuperAdmin: JSON.parse(process.env.SUPER_ADMINS).includes(
      admin.adminusername
    ),
  };

  res.status(200).json({
    success: true,
    message: "Logged in successfully",
    admin: adminObject,
  });
});

const getAdmins = asyncHandler(async (req, res) => {
  const admins = await prisma.admin.findMany({
    orderBy: { createdAt: "desc" },
  });
  const superAdmins = JSON.parse(process.env.SUPER_ADMINS);

  const adminsWithRoles = admins.map((admin) => ({
    ...admin,
    isSuperAdmin: superAdmins.includes(admin.adminusername),
    role: superAdmins.includes(admin.adminusername) ? "Super Admin" : "Admin",
  }));

  res.status(200).json({ success: true, admins: adminsWithRoles });
});

// ✅ Get Single Admin
const getAdmin = asyncHandler(async (req, res) => {
  const studentId = req.params.id;
  if (!studentId || studentId.includes("/")) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid ID format" });
  }

  const admin = await prisma.admin.findUnique({
    where: { studentid: studentId },
  });
  if (!admin)
    return res.status(404).json({ success: false, message: "Admin not found" });

  res.status(200).json({ success: true, admin });
});

// ✅ Update Admin (including changing studentid)
const updateAdmin = asyncHandler(async (req, res) => {
  const currentId = req.params.id;
  if (!currentId || currentId.includes("/")) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid ID format" });
  }

  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  const { studentid: newId, adminusername, adminpassword } = req.body;

  const existingUser = await prisma.admin.findUnique({
    where: { studentid: currentId },
  });
  if (!existingUser)
    return res.status(404).json({ success: false, message: "Admin not found" });

  // Check for studentid conflict
  if (newId && newId !== currentId) {
    const conflict = await prisma.admin.findUnique({
      where: { studentid: newId },
    });
    if (conflict)
      return res
        .status(400)
        .json({ success: false, message: "New studentid already exists" });
  }

  const updatedAdmin = await prisma.admin.update({
    where: { studentid: currentId },
    data: {
      studentid: newId || existingUser.studentid,
      adminusername: adminusername || existingUser.adminusername,
      adminpassword:
        adminpassword === "previous one"
          ? existingUser.adminpassword
          : await hashPassword(adminpassword),
    },
  });

  res.status(200).json({ success: true, updatedAdmin });
});

// ✅ Delete Admin
const deleteAdmin = asyncHandler(async (req, res) => {
  const studentId = req.params.id;
  if (!studentId || studentId.includes("/"))
    return res.status(400).json({ success: false, message: "Invalid ID" });

  const token = req.cookies.jwt;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userExists = await prisma.admin.findUnique({
    where: { studentid: studentId },
  });
  if (!userExists)
    return res.status(404).json({ success: false, message: "Admin not found" });

  if (
    decoded.studentid !== studentId &&
    JSON.parse(process.env.SUPER_ADMINS).includes(userExists.adminusername)
  ) {
    return res
      .status(403)
      .json({ success: false, message: "Not authorized to delete this admin" });
  }

  await prisma.admin.delete({ where: { studentid: studentId } });
  res
    .status(200)
    .json({ success: true, message: "Admin deleted successfully" });
});

// ✅ Delete All Non-Super Admins
const deleteAllAdmins = asyncHandler(async (req, res) => {
  const superAdmins = JSON.parse(process.env.SUPER_ADMINS);
  if (!superAdmins.length)
    return res
      .status(400)
      .json({ success: false, message: "No super admins defined" });

  await prisma.admin.deleteMany({
    where: { adminusername: { notIn: superAdmins } },
  });
  res.status(200).json({
    success: true,
    message: "All non-super admins deleted successfully",
  });
});

// ✅ Logout Admin
const logoutAdmin = asyncHandler(async (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 0,
  });
  res.status(200).json({ success: true, message: "Logged out successfully" });
});

export {
  registerAdmin,
  logAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
  deleteAllAdmins,
  logoutAdmin,
};
