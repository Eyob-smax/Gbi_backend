import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.route("/").post(addUser).get(getUsers);

router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);

export default router;
