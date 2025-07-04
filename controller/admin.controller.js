import { prisma } from "../models/DatabaseConfig.js";
import { JoiAdminValidator } from "../utils/util.js";
import { asyncHandler } from "../utils/util.js";
import buildToken from "../middleware/adminAuth.js";
import { hashPassword, comparePassword } from "../utils/util.js";
const schema = JoiAdminValidator();
import dotenv from "dotenv";
dotenv.config();

const registerAdmin = asyncHandler(async (req, res) => {
  const { studentId, adminUsername, adminPassword } = req.body;

  if (!studentId || !adminPassword || !adminUsername) {
    return res.status(400).json({
      success: true,
      message: "studentId or admin credentials not found",
    });
  }

  const isAdminExist = await prisma.admin.findUnique({
    where: { studentid: studentId },
  });

  if (isAdminExist) {
    return res
      .status(400)
      .json({ success: false, message: "User already existed!" });
  }

  const admin = await prisma.admin.create({
    data: {
      studentid: studentId,
      adminusername: adminUsername,
      adminpassword: await hashPassword(adminPassword),
    },
  });

  if (!admin) {
    throw new Error("can't create an admin!");
  }

  buildToken(res, studentId, adminUsername);
  res.status(201).json({ success: false, message: "Admin created!" });
});

const logAdmin = asyncHandler(async (req, res) => {
  const { studentId, adminPassword } = req.body;

  const admin = await prisma.admin.findUnique({
    where: { studentid: studentId },
  });

  if (admin && (await comparePassword(admin.adminpassword, adminPassword))) {
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
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  if (isNaN(page) || isNaN(limit)) {
    return res.status(400).json({
      success: false,
      message: "page or limit query format is not valid!",
    });
  }

  const [admins, totalAdmins] = await Promise.all([
    prisma.admin.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.admin.count(),
  ]);

  res.status(200).json({
    success: true,
    page,
    totalPages: Math.ceil(totalAdmins / limit),
    totalAdmins,
    admins,
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
  if (!id) return res.status(400).json({ error: "Invalid ID format" });
  if (id.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead",
    });
  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, error: error.details[0].message });
  const { studentId, adminUsername, adminPassword } = req.body;

  const existingUser = await prisma.admin.findUnique({
    where: { studentid: id },
  });

  if (!existingUser)
    return res.status(404).json({ success: false, error: "User not found" });

  const updatedAdmin = await prisma.admin.update({
    where: { studentid: studentId },
    data: {
      studentid: adminUsername || existingUser.studentid,
      adminusername: adminUsername || existingUser.adminusername,
      adminpassword: adminPassword || existingUser.adminpassword,
    },
  });

  res.json({ success: true, updatedAdmin });
});

const deleteAdmin = asyncHandler(async (req, res) => {
  const studentId = req.params.id;
  if (!studentId) return res.status(400).json({ error: "Invalid ID format" });
  if (studentId.includes("/")) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid user ID format!" });
  }

  const userExists = await prisma.admin.findUnique({
    where: { studentid: studentId },
  });

  if (!userExists) {
    return res.status(404).json({ success: false, message: "User not found" });
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
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      path: "/",
    });
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    res.status(200).json({
      success: false,
      message:
        "Something went wront when logging out the admin: " + err.message,
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
