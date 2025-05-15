import express from "express";
import { JoiAdminValidator } from "../../utils/util.js";
const schema = JoiAdminValidator();
import { handleError } from "../../utils/util.js";
import { prisma } from "../../models/DatabaseConfig.js";

const updateAdmin = express.Router();

updateAdmin.put("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json({ error: "Invalid ID format" });
  if (id.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead",
    });
  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, error: error.details[0].message });
  const { studentId, adminUsername, adminPassword } = req.body;

  try {
    const existingUser = await prisma.admin.findUnique({
      where: { studentid: id },
    });

    if (!existingUser)
      return res.status(404).json({ success: false, error: "User not found" });

    const updatedAdmin = await prisma.admin.update({
      where: { studentid: studentId },
      data: {
        studentid: adminUsername || existingUser.studentid,
        adminusername: adminUsername || existingUser.adminusername,
        adminpassword: adminPassword || existingUser.adminpassword,
      },
    });

    res.json({ success: true, updatedAdmin });
  } catch (err) {
    console.error("❌ Error updating user:", err);
    const errorResult = handleError(err);
    res.status(500).json(errorResult);
  }
});

export default updateAdmin;
