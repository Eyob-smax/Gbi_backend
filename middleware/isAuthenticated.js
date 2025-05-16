import jwt from "jsonwebtoken";
import { prisma } from "../models/DatabaseConfig.js";

async function protect(req, res, next) {
  let token = req.cookies.jwt;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

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
        message: "User not found, with the give token",
      });
    }

    req.admin = admin;

    next();
  } catch (error) {
    console.error(error);
    res
      .status(401)
      .json({ success: false, message: "Not authorized, token failed" });
  }
}

export async function isGeneralAdmin(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const generalAdmin = await prisma.admin.findUnique({
      where: {
        studentid: decoded.studentid,
        adminusername: decoded.generalAdmin,
      },
      select: {
        studentid: true,
        adminusername: true,
      },
    });

    if (!generalAdmin) {
      return res.status(400).json({
        success: false,
        message: "General admin not found, with the give token!",
      });
    }

    req.admin = generalAdmin;

    next();
  } catch (error) {
    console.error(error);
    res
      .status(401)
      .json({ success: false, message: "Not authorized, token failed" });
  }
}

export default protect;
