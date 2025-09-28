import express from "express";
import cors from "cors";
import UserRoutes from "./routes/user.routes.js";
import AdminRoutes from "./routes/admin.routes.js";
import jwt from "jsonwebtoken";
import { handleError, hashPassword } from "./utils/util.js";
import cookieParser from "cookie-parser";
import { logoutAdmin } from "./controller/admin.controller.js";
import { prisma } from "./models/DatabaseConfig.js";

const app = express();
app.use(
  cors({
    origin: [
      "https://gbi-gubae-frontend.vercel.app",
      "http://10.4.192.207:5173",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", UserRoutes);
app.use("/api/admin", AdminRoutes);
app.get("/api/logout", logoutAdmin);

app.get("/api/auth/current", async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.admin.findUnique({
      where: { studentid: decoded?.studentid },
    });

    if (!user || !decoded) {
      throw new Error(
        "Please provide valid token or this user didn't access in our DB!"
      );
    }
    res.json({
      success: true,
      user: {
        studentid: user.studentid,
        adminusername: user.adminusername,
        isAuthenticated: true,
        isSuperAdmin: JSON.parse(process.env.SUPER_ADMINS).includes(
          user.adminusername
        ),
      },
    });
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
});

app.use((err, req, res, next) => {
  const errorResponse = handleError(err);
  res.status(500).json(errorResponse);
});

app.listen(process.env.PORT || 5500, () =>
  console.log("the server running on https://localhost:5500")
);
