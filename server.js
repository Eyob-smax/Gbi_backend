import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoutes from "./routes/user.routes.js";
import AdminRoutes from "./routes/admin.routes.js";
import jwt from "jsonwebtoken";
import { handleError } from "./utils/util.js";
import cookieParser from "cookie-parser";
import { logoutAdmin } from "./controller/admin.controller.js";
import { createPrismaClient } from "./models/DatabaseConfig.js";

// load environment variables early so they are available everywhere
dotenv.config();

const prisma = createPrismaClient().client;
const app = express();

// enable CORS for the frontend origin(s) defined in .env
// allow localhost and 127.0.0.1 variants in development
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (e.g. Postman, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS policy: origin not allowed"));
    },
    credentials: true,
  }),
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
        "Please provide valid token or this user didn't access in our DB!",
      );
    }
    res.json({
      success: true,
      user: {
        studentid: user.studentid,
        adminusername: user.adminusername,
        isAuthenticated: true,
        isSuperAdmin: JSON.parse(process.env.SUPER_ADMINS).includes(
          user.adminusername,
        ),
        permissions: {
          readUsers: user.readUsers,
          registerUsers: user.registerUsers,
          editAnyUser: user.editAnyUser,
          editSpecificUsers: user.editSpecificUsers,
          removeAnyUsers: user.removeAnyUsers,
          removeSpecificUsers: user.removeSpecificUsers,
        },
      },
    });
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  const errorResponse = handleError(err);
  res.status(500).json(errorResponse);
});

app.listen(process.env.PORT || 6500, () =>
  console.log("the server running on port " + (process.env.PORT || 6500)),
);
