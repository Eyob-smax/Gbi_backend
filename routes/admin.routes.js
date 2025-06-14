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

router.route("/login").post(logAdmin);
router.route("/register").post(registerAdmin);

export default router;
