import express from "express";
import { prisma } from "../../models/DatabaseConfig.js";
import { handleError } from "../../utils/util.js";
const deleteAdmin = express.Router();

deleteAdmin.delete("/admin/:id", async (req, res) => {
  const studentId = req.params.id;
  if (!studentId) return res.status(400).json({ error: "Invalid ID format" });
  if (studentId.includes("/")) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid user ID format!" });
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
    const errorResult = handleError(err);
    res.status(500).json(errorResult);
  }
});

export default deleteAdmin;
