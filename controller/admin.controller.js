import { prisma } from "../models/DatabaseConfig.js";
import { JoiAdminValidator } from "../utils/util.js";
import { asyncHandler } from "../utils/util.js";
import buildToken from "../middleware/adminAuth.js";
import { hashPassword, comparePassword } from "../utils/util.js";
const schema = JoiAdminValidator();
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const registerAdmin = asyncHandler(async (req, res) => {
  const { studentid, adminusername, adminpassword } = req.body;

  if (!studentid || !adminpassword || !adminusername) {
    return res.status(400).json({
      success: false,
      message: "studentid or admin credentials not found",
    });
  }

  const isAdminExist = await prisma.admin.findUnique({
    where: { studentid },
  });

  if (isAdminExist) {
    return res
      .status(400)
      .json({ success: false, message: "User already existed!" });
  }

  const admin = await prisma.admin.create({
    data: {
      studentid,
      adminusername,
      adminpassword: await hashPassword(adminpassword),
    },
  });

  if (!admin) {
    throw new Error("can't create an admin!");
  }

  buildToken(res, studentid, adminusername);
  res.status(201).json({ success: true, message: "Admin created!" });
});

const logAdmin = asyncHandler(async (req, res) => {
  const { studentid, adminpassword } = req.body;

  if (!studentid || !adminpassword) {
    return res.status(400).json({
      success: false,
      message: "studentid or admin credentials not found",
    });
  }

  const admin = await prisma.admin.findUnique({
    where: { studentid },
  });

  if (admin && (await comparePassword(admin.adminpassword, adminpassword))) {
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
      message: "Admin logged in successfully!",
      admin: adminObject,
    });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid studentid or password" });
  }
});

const getAdmins = asyncHandler(async (req, res) => {
  const admins = await prisma.admin.findMany({
    orderBy: { createdAt: "desc" },
  });

  const adminsWithSuperStatus = admins.map((admin) => ({
    ...admin,
    isSuperAdmin: JSON.parse(process.env.SUPER_ADMINS).includes(
      admin.adminusername
    ),
    role: JSON.parse(process.env.SUPER_ADMINS).includes(admin.adminusername)
      ? "Super Admin"
      : "Admin",
  }));

  res.status(200).json({
    success: true,
    admins: adminsWithSuperStatus,
  });
});

const getAdmin = asyncHandler(async (req, res) => {
  const studentId = req.params.id;

  if (!studentId) return res.status(400).json({ error: "Invalid ID format" });
  if (studentId.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead",
    });
  const admin = await prisma.admin.findUnique({
    where: { studentid: studentId },
  });

  if (!admin)
    return res.status(404).json({ success: false, error: "User not found" });

  res.json({ success: true, admin });
});

const updateAdmin = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log("Updating admin with ID:", req.body);
  if (!id)
    return res
      .status(400)
      .json({ success: false, message: "Please Provide a valid id!" });
  if (id.includes("/"))
    return res.status(400).json({
      success: false,
      message: "Invalid ID format, hint: don't use / use - instead",
    });
  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  const { studentid, adminusername, adminpassword } = req.body;

  const existingUser = await prisma.admin.findUnique({
    where: { studentid: id },
  });

  if (!existingUser)
    return res.status(404).json({ success: false, message: "User not found" });

  const updatedAdmin = await prisma.admin.update({
    where: { studentid },
    data: {
      studentid: studentid || existingUser.studentid,
      adminusername: adminusername || existingUser.adminusername,
      adminpassword:
        (await hashPassword(adminpassword)) || existingUser.adminpassword,
    },
  });

  console.log("Updated admin:", updatedAdmin);

  res.json({ success: true, updatedAdmin });
});

const deleteAdmin = asyncHandler(async (req, res) => {
  const studentId = req.params.id;
  if (!studentId)
    return res
      .status(400)
      .json({ error: "Please, provide a student Id to delete admin" });
  if (studentId.includes("/")) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid user ID format!" });
  }

  const token = req.cookies.jwt;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    return res.status(401).json({
      success: false,
      message: "Invalid token or token expired, can't delete admin",
    });
  }

  const userExists = await prisma.admin.findUnique({
    where: { studentid: studentId },
  });

  if (!userExists) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  if (
    decoded.studentid !== studentId &&
    JSON.parse(process.env.SUPER_ADMINS).includes(userExists.adminusername)
  ) {
    return res.status(403).json({
      success: false,
      message:
        "You are not authorized to delete this admin (Super admins can't delete each other)",
    });
  }

  await prisma.admin.delete({
    where: { studentid: studentId },
  });

  res.status(200).json({ success: true, message: "User deleted successfully" });
});

const deleteAllAdmins = asyncHandler(async (req, res) => {
  const studentsToExclude = JSON.parse(process.env.SUPER_ADMINS);

  if (!Array.isArray(studentsToExclude) || studentsToExclude.length === 0) {
    return res.status(400).json({
      success: false,
      message: "No super admins defined in environment variables",
    });
  }
  const userExists = await prisma.admin.findMany({
    where: {
      adminusername: {
        notIn: studentsToExclude,
      },
    },
  });

  if (userExists.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No admins found to delete",
    });
  }

  await prisma.admin.deleteMany({
    where: {
      adminusername: {
        notIn: studentsToExclude,
      },
    },
  });
  res.status(200).json({
    success: true,
    message: "All admins deleted successfully, except super admins",
  });
});

const logoutAdmin = asyncHandler(async (req, res) => {
  console.log("Logging out admin...");

  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      maxAge: 0,
    });

    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({
      success: false,
      message:
        "Something went wrong when logging out the admin: " + err.message,
    });
  }
});

export {
  registerAdmin,
  getAdmin,
  getAdmins,
  deleteAdmin,
  updateAdmin,
  logAdmin,
  deleteAllAdmins,
  logoutAdmin,
};
