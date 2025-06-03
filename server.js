import express from "express";
import cors from "cors";

import UserRoutes from "./routes/user.routes.js";
import AdminRoutes from "./routes/admin.routes.js";

import { handleError } from "./utils/util.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", UserRoutes);
app.use("/api/admin", AdminRoutes);

app.use((err, req, res, next) => {
  const errorResponse = handleError(err);
  res.status(500).json(errorResponse);
});

app.listen(process.env.PORT || 4500, () =>
  console.log("the server running on https://localhost:4500")
);
