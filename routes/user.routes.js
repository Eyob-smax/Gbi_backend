import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  deleteAllUsers,
} from "../controller/user.controller.js";

import protect, { isGeneralAdmin } from "../middleware/isAuthenticated.js";

const router = express.Router();

router
  .route("/")
  .post(protect, addUser)
  .get(protect, getUsers)
  .delete(protect, isGeneralAdmin, deleteAllUsers);

router
  .route("/:id")
  .put(protect, updateUser)
  .delete(protect, deleteUser)
  .get(protect, getUser);

export default router;
