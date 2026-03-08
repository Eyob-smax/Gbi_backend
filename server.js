import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoutes from "./routes/user.routes.js";
import AdminRoutes from "./routes/admin.routes.js";
import { handleError } from "./utils/util.js";
import cookieParser from "cookie-parser";
import { logoutAdmin } from "./controller/admin.controller.js";
import protect from "./middleware/isAuthenticated.js";

dotenv.config();

const app = express();

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
app.post("/api/auth/logout", logoutAdmin);
app.route("/api/logout").get(logoutAdmin).post(logoutAdmin);

app.get("/api/auth/current", protect, (req, res) => {
  res.json({
    success: true,
    user: {
      studentid: req.admin.studentid,
      adminusername: req.admin.adminusername,
      isAuthenticated: true,
      isSuperAdmin: req.admin.isSuperAdmin,
      role: req.admin.isSuperAdmin ? "Super Admin" : "Admin",
      permissions: {
        readUsers: req.admin.readUsers,
        registerUsers: req.admin.registerUsers,
        editAnyUser: req.admin.editAnyUser,
        editSpecificUsers: req.admin.editSpecificUsers,
        removeAnyUsers: req.admin.removeAnyUsers,
        removeSpecificUsers: req.admin.removeSpecificUsers,
      },
    },
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  const errorResponse = handleError(err);
  res.status(500).json(errorResponse);
});

app.listen(process.env.PORT || 6500, () =>
  console.log("the server running on port " + (process.env.PORT || 6500)),
);
