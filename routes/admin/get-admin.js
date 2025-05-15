import express from "express";
import { prisma } from "../../models/DatabaseConfig.js";
import { handleError } from "../../utils/util.js";
const getAdmin = express.Router();

getAdmin.get("/:id", async (req, res) => {
  const studentId = req.params.id;

  if (!studentId) return res.status(400).json({ error: "Invalid ID format" });
  if (studentId.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead",
    });
  try {
    const admin = await prisma.admin.findUnique({
      where: { studentid: studentId },
    });

    if (!admin)
      return res.status(404).json({ success: false, error: "User not found" });

    res.json({ success: true, admin });
  } catch (err) {
    const errorResult = handleError(err);
    res.status(500).json(errorResult);
  }
});

export default getAdmin;
