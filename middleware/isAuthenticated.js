import jwt from "jsonwebtoken";
import { prisma } from "../models/DatabaseConfig.js";

async function protect(req, res, next) {
  let token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
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
      return res
        .status(400)
        .json({
          success: false,
          message: "User not found, with the give token",
        });
    }

    req.admin = admin;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
}

export default protect;
