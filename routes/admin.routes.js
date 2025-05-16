import express from "express";
import {
  getAdmin,
  updateAdmin,
  deleteAdmin,
  getAdmins,
  logAdmin,
  registerAdmin,
} from "../controller/admin.controller.js";
import protect from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/").get(protect, getAdmins).post(protect, registerAdmin);

router
  .route("/:id")
  .get(protect, getAdmin)
  .put(protect, updateAdmin)
  .delete(protect, deleteAdmin);
router.route("/login").post(logAdmin);
router.route("/register").post(registerAdmin);

export default router;
