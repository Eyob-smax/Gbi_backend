import { asyncHandler } from "../utils/util.js";
import buildToken, { clearAuthCookie } from "../middleware/adminAuth.js";
import { hashPassword, comparePassword } from "../utils/util.js";
import Joi from "joi";
import { createPrismaClient } from "../models/DatabaseConfig.js";

const prisma = createPrismaClient().client;

const getSuperAdmins = () => {
  try {
    return JSON.parse(process.env.SUPER_ADMINS || "[]");
  } catch (error) {
    console.error("Failed to parse SUPER_ADMINS:", error);
    return [];
  }
};

const registerSchema = Joi.object({
  studentid: Joi.string().max(15).required(),
  adminusername: Joi.string().max(50).required(),
  adminpassword: Joi.string().min(8).required(),
  permissions: Joi.object({
    readUsers: Joi.boolean(),
    registerUsers: Joi.boolean(),
    editAnyUser: Joi.boolean(),
    editSpecificUsers: Joi.boolean(),
    removeAnyUsers: Joi.boolean(),
    removeSpecificUsers: Joi.boolean(),
  }),
});

const updateSchema = Joi.object({
  studentid: Joi.string().max(15),
  adminusername: Joi.string().max(50),
  adminpassword: Joi.string().min(8),
  permissions: Joi.object({
    readUsers: Joi.boolean(),
    registerUsers: Joi.boolean(),
    editAnyUser: Joi.boolean(),
    editSpecificUsers: Joi.boolean(),
    removeAnyUsers: Joi.boolean(),
    removeSpecificUsers: Joi.boolean(),
  }),
}).min(1);

const DEFAULT_PERMISSIONS = {
  readUsers: false,
  registerUsers: false,
  editAnyUser: false,
  editSpecificUsers: false,
  removeAnyUsers: false,
  removeSpecificUsers: false,
};

const buildPermissions = (permissions, fallback = DEFAULT_PERMISSIONS) => {
  const p = permissions ?? {};
  return {
    readUsers: p.readUsers ?? fallback.readUsers,
    registerUsers: p.registerUsers ?? fallback.registerUsers,
    editAnyUser: p.editAnyUser ?? fallback.editAnyUser,
    editSpecificUsers: p.editSpecificUsers ?? fallback.editSpecificUsers,
    removeAnyUsers: p.removeAnyUsers ?? fallback.removeAnyUsers,
    removeSpecificUsers: p.removeSpecificUsers ?? fallback.removeSpecificUsers,
  };
};

const toAdminResponse = (admin, superAdmins = [], usersCreatedCount = 0) => ({
  studentid: admin.studentid,
  adminusername: admin.adminusername,
  createdAt: admin.createdAt,
  isSuperAdmin: superAdmins.includes(admin.adminusername),
  role: superAdmins.includes(admin.adminusername) ? "Super Admin" : "Admin",
  usersCreatedCount,
  permissions: {
    readUsers: admin.readUsers,
    registerUsers: admin.registerUsers,
    editAnyUser: admin.editAnyUser,
    editSpecificUsers: admin.editSpecificUsers,
    removeAnyUsers: admin.removeAnyUsers,
    removeSpecificUsers: admin.removeSpecificUsers,
  },
});

const validateIdParam = (id, res) => {
  if (!id || id.includes("/")) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid ID format" });
  }
  return null;
};

// ✅ Register Admin
const registerAdmin = asyncHandler(async (req, res) => {
  const { error, value } = registerSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  const { studentid, adminusername, adminpassword, permissions } = value;

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
      ...buildPermissions(permissions),
    },
  });

  const superAdmins = getSuperAdmins();
  res.status(201).json({
    success: true,
    message: "Admin created",
    admin: toAdminResponse(admin, superAdmins),
  });
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

  buildToken(res, admin.studentid);

  const superAdmins = getSuperAdmins();

  res.status(200).json({
    success: true,
    message: "Logged in successfully",
    admin: toAdminResponse(admin, superAdmins),
  });
});

const getAdmins = asyncHandler(async (req, res) => {
  const admins = await prisma.admin.findMany({
    orderBy: { createdAt: "desc" },
  });
  const superAdmins = getSuperAdmins();

  const createdCountRows = await prisma.user.groupBy({
    by: ["createdBy"],
    _count: { _all: true },
    where: {
      createdBy: {
        not: null,
      },
    },
  });

  const createdCounts = Object.fromEntries(
    createdCountRows.map((row) => [row.createdBy, row._count._all]),
  );

  const adminsWithRoles = admins.map((admin) =>
    toAdminResponse(admin, superAdmins, createdCounts[admin.studentid] ?? 0),
  );

  res.status(200).json({ success: true, admins: adminsWithRoles });
});

// ✅ Get Single Admin
const getAdmin = asyncHandler(async (req, res) => {
  const studentId = req.params.id;
  const validationError = validateIdParam(studentId, res);
  if (validationError) return validationError;

  const admin = await prisma.admin.findUnique({
    where: { studentid: studentId },
  });
  if (!admin)
    return res.status(404).json({ success: false, message: "Admin not found" });

  const superAdmins = getSuperAdmins();
  res
    .status(200)
    .json({ success: true, admin: toAdminResponse(admin, superAdmins) });
});

// ✅ Update Admin (including changing studentid)
const updateAdmin = asyncHandler(async (req, res) => {
  const currentId = req.params.id;
  const validationError = validateIdParam(currentId, res);
  if (validationError) return validationError;

  const { error } = updateSchema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  const {
    studentid: newId,
    adminusername,
    adminpassword,
    permissions,
  } = req.body;

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
        adminpassword === undefined
          ? existingUser.adminpassword
          : await hashPassword(adminpassword),
      ...buildPermissions(permissions, {
        readUsers: existingUser.readUsers,
        registerUsers: existingUser.registerUsers,
        editAnyUser: existingUser.editAnyUser,
        editSpecificUsers: existingUser.editSpecificUsers,
        removeAnyUsers: existingUser.removeAnyUsers,
        removeSpecificUsers: existingUser.removeSpecificUsers,
      }),
    },
  });

  const superAdmins = getSuperAdmins();
  res.status(200).json({
    success: true,
    updatedAdmin: toAdminResponse(updatedAdmin, superAdmins),
  });
});

// ✅ Delete Admin
const deleteAdmin = asyncHandler(async (req, res) => {
  const studentId = req.params.id;
  const validationError = validateIdParam(studentId, res);
  if (validationError) return validationError;

  const userExists = await prisma.admin.findUnique({
    where: { studentid: studentId },
  });
  if (!userExists)
    return res.status(404).json({ success: false, message: "Admin not found" });

  const superAdmins = getSuperAdmins();
  if (superAdmins.includes(userExists.adminusername)) {
    // Count how many super admins still exist in the DB
    const superAdminCount = await prisma.admin.count({
      where: { adminusername: { in: superAdmins } },
    });
    if (superAdminCount <= 1) {
      return res.status(403).json({
        success: false,
        message: "Cannot delete the last super admin",
      });
    }
    // Only a super admin can delete another super admin
    if (!req.admin.isSuperAdmin) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this admin",
      });
    }
  }

  await prisma.admin.delete({ where: { studentid: studentId } });
  res
    .status(200)
    .json({ success: true, message: "Admin deleted successfully" });
});

// ✅ Delete All Non-Super Admins
const deleteAllAdmins = asyncHandler(async (req, res) => {
  const superAdmins = getSuperAdmins();
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
  clearAuthCookie(res);
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
