import express from "express";
import cors from "cors";
import add from "./routes/users/add-user.js";
import getusers from "./routes/users/get-users.js";
import getUser from "./routes/users/get-user.js";
import updateUser from "./routes/users/update-user.js";
import deleteUser from "./routes/users/delete-user.js";

import addAdmin from "./routes/admin/add-admin.js";
import deleteAdmin from "./routes/admin/delete-admin.js";
import getAdmins from "./routes/admin/get-admins.js";
import updateAdmin from "./routes/admin/update-admin.js";
import getAdmin from "./routes/admin/get-admin.js";

import login from "./routes/login.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/login", login);

app.use("/api/create", add);
app.use("/api/getAll", getusers);
app.use("/api/get", getUser);
app.use("/api/update", updateUser);
app.use("/api/delete", deleteUser);

app.use("/api/assign", addAdmin);
app.use("/api/remove", deleteAdmin);
app.use("/api/get-admins", getAdmins);
app.use("/api/update-admins", updateAdmin);
app.use("/api/get-admin", getAdmin);

app.listen(process.env.PORT || 4500, () =>
  console.log("the server running on https://localhost:4500")
);
