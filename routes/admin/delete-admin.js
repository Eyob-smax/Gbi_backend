import express from "express";
import { JoiValidator } from "../../utils/util.js";
const schema = JoiValidator();
import { prisma } from "../../models/DatabaseConfig.js";

const deleteAdmin = express.Router();

deleteAdmin.delete("/admin/:id", async (req, res) => {
  const studentId = parseInt(req.params.id);

  if (isNaN(studentId)) {
    return res.status(400).json({ success: false, message: "Invalid user ID" });
  }

  try {
    const userExists = await prisma.admin.findUnique({
      where: { studentid: studentId },
    });

    if (!userExists) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    await prisma.admin.delete({
      where: { studentid: studentId },
    });

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting user:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default deleteAdmin;
