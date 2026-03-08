import express from "express";
import rateLimit from "express-rate-limit";
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

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many login attempts, please try again after 15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Public routes (must be defined before /:id to avoid parameter capture)
router.route("/login").post(loginLimiter, logAdmin);

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
