import express from "express";
import { JoiValidator } from "../../utils/util.js";
const schema = JoiValidator();
import { prisma } from "../../models/DatabaseConfig.js";

const deleteUser = express.Router();

deleteUser.delete("/user/:id", async (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({ success: false, message: "Invalid user ID" });
  }

  try {
    const userExists = await prisma.user.findUnique({
      where: { userid: userId },
    });

    if (!userExists) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    await prisma.user.delete({
      where: { userid: userId },
    });

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting user:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default deleteUser;
