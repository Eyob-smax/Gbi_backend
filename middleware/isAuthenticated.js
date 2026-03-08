import jwt from "jsonwebtoken";
import { createPrismaClient } from "../models/DatabaseConfig.js";

const prisma = createPrismaClient().client;
function verifyToken(req) {
  const token = req.cookies.jwt;
  if (!token) throw new Error("No token");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

export async function protect(req, res, next) {
  try {
    const decoded = verifyToken(req);
    const superAdmins = JSON.parse(process.env.SUPER_ADMINS || "[]");
    const admin = await prisma.admin.findUnique({
      where: { studentid: decoded.studentid },
      select: {
        studentid: true,
        adminusername: true,
        readUsers: true,
        registerUsers: true,
        editAnyUser: true,
        editSpecificUsers: true,
        removeAnyUsers: true,
        removeSpecificUsers: true,
      },
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "User not found with the given token",
      });
    }
    req.admin = {
      ...admin,
      isSuperAdmin: superAdmins.includes(admin.adminusername),
    };
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Not authorized: " + error.message,
    });
  }
}

export function isGeneralAdmin(req, res, next) {
  if (!req.admin?.isSuperAdmin) {
    return res.status(403).json({
      success: false,
      message: "General admin not found or unauthorized!",
    });
  }
  next();
}

export default protect;
