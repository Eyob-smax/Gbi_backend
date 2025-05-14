import express from "express";
import { prisma } from "../../models/DatabaseConfig.js";

const getAdmin = express.Router();

getAdmin.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!id.match(/\d+/g))
    return res.status(400).json({ success: false, error: "Invalid ID format" });
  try {
    const admin = await prisma.admin.findUnique({
      where: { studentid: id },
    });

    if (!admin)
      return res.status(404).json({ success: false, error: "User not found" });

    res.json({ success: true, admin });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default getAdmin;
