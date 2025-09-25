import jwt from "jsonwebtoken";
import { prisma } from "../models/DatabaseConfig.js";

function verifyToken(req) {
  const token = req.cookies.jwt;
  if (!token) throw new Error("No token");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

export async function protect(req, res, next) {
  try {
    const decoded = verifyToken(req);
    const admin = await prisma.admin.findUnique({
      where: { studentid: decoded.studentid },
      select: {
        studentid: true,
        adminusername: true,
      },
    });

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "User not found with the given token",
      });
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Not authorized: " + error.message,
    });
  }
}

export async function isGeneralAdmin(req, res, next) {
  try {
    const decoded = verifyToken(req);

    const superAdmins = JSON.parse(process.env.SUPER_ADMINS || "[]");

    const generalAdmin = await prisma.admin.findFirst({
      where: {
        studentid: decoded.studentid,
        adminusername: {
          in: superAdmins,
        },
      },
      select: {
        studentid: true,
        adminusername: true,
      },
    });

    if (!generalAdmin) {
      return res.status(403).json({
        success: false,
        message: "General admin not found or unauthorized!",
      });
    }

    req.admin = generalAdmin;
    next();
  } catch (error) {
    console.error("General admin check failed:", error);
    res.status(401).json({
      success: false,
      message: "Not authorized: " + error.message,
    });
  }
}

export default protect;
