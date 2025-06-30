import express from "express";
import cors from "cors";

import UserRoutes from "./routes/user.routes.js";
import AdminRoutes from "./routes/admin.routes.js";
import jwt from "jsonwebtoken";
import { handleError } from "./utils/util.js";
import cookieParser from "cookie-parser";
import { logoutAdmin } from "./controller/admin.controller.js";

const app = express();
app.use(cors());
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
    res.json({ success: true, user: { ...decoded, isAuthenticated: true } });
    console.log("Current user:", decoded);
  } catch (error) {
    console.error("JWT verification failed:", error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
});

app.use((err, req, res, next) => {
  const errorResponse = handleError(err);
  res.status(500).json(errorResponse);
});

app.listen(process.env.PORT || 4500, () =>
  console.log("the server running on https://localhost:4500")
);
