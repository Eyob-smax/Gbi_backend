import express from "express";
import {
  getAdmin,
  updateAdmin,
  deleteAdmin,
  getAdmins,
  logAdmin,
  registerAdmin,
  deleteAllAdmins,
} from "../controller/admin.controller.js";
import protect from "../middleware/isAuthenticated.js";
import { isGeneralAdmin } from "../middleware/isAuthenticated.js";

const router = express.Router();

// Public routes (must be defined before /:id to avoid parameter capture)
router.route("/login").post(logAdmin);

// Protected admin management routes
router
  .route("/")
  .get(protect, isGeneralAdmin, getAdmins)
  .post(protect, isGeneralAdmin, registerAdmin)
  .delete(protect, isGeneralAdmin, deleteAllAdmins);

router
  .route("/:id")
  .get(protect, isGeneralAdmin, getAdmin)
  .put(protect, isGeneralAdmin, updateAdmin)
  .delete(protect, isGeneralAdmin, deleteAdmin);

export default router;
