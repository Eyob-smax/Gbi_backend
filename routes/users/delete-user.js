import express from "express";
import { prisma } from "../../models/DatabaseConfig.js";
import { handleError } from "../../utils/util.js";
const deleteUser = express.Router();

deleteUser.delete("/user/:id", async (req, res) => {
  const studentId = req.params.id;

  if (!studentId) {
    return res.status(400).json({ success: false, message: "ID not found" });
  }

  if (id.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead",
    });

  try {
    const userExists = await prisma.user.findUnique({
      where: { studentid: studentId },
    });

    if (!userExists) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    await prisma.user.delete({
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

export default deleteUser;
