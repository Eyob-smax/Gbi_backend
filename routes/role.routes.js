import express from "express";
import {
  createRole,
  getRoles,
  getRole,
  updateRole,
  deleteRole,
} from "../controller/role.controller.js";
import protect from "../middleware/isAuthenticated.js";
import { isGeneralAdmin } from "../middleware/isAuthenticated.js";

const router = express.Router();

router
  .route("/")
  .get(protect, isGeneralAdmin, getRoles)
  .post(protect, isGeneralAdmin, createRole);

router
  .route("/:id")
  .get(protect, isGeneralAdmin, getRole)
  .put(protect, isGeneralAdmin, updateRole)
  .delete(protect, isGeneralAdmin, deleteRole);

export default router;
