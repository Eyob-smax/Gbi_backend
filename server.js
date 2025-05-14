import express from "express";
import cors from "cors";
import { JoiValidator } from "./utils/util.js";
import add from "./routes/users/add-user.js";
import getusers from "./routes/users/get-users.js";
import getUser from "./routes/users/get-user.js";
import updateUser from "./routes/users/update-user.js";
import deleteUser from "./routes/users/delete-user.js";

import addAdmin from "./routes/admin/add-admin.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/create", add);
app.use("/api/getAll", getusers);
app.use("/api/get", getUser);
app.use("/api/update", updateUser);
app.use("/api/delete", deleteUser);

app.use("/api/assign", addAdmin);

app.listen(process.env.PORT || 3500, () =>
  console.log("the server running on https://localhost:3500")
);
