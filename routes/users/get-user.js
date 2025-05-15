import express from "express";
import { prisma } from "../../models/DatabaseConfig.js";

const getUser = express.Router();

getUser.get("/user/:id", async (req, res) => {
  const studentId = req.params.id;

  if (!studentId) return res.status(400).json({ error: "Invalid ID" });
  if (id.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead",
    });
  try {
    const user = await prisma.user.findUnique({
      where: { studentid: studentId },
      include: { universityusers: true },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default getUser;
