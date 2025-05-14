import express from "express";
import { JoiAdminValidator } from "../../utils/util.js";
const schema = JoiAdminValidator();
import { prisma } from "../../models/DatabaseConfig.js";
import { handleError } from "../../utils/util.js";
import { hashPassword } from "../../utils/util.js";

const addAdmin = express.Router();

addAdmin.post("/admin", async (req, res) => {
  const { error } = schema.validate(req.body);
  const { studentId, adminUsername, adminPassword } = req.body;
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const admin = await prisma.admin.create({
      data: {
        studentid: studentId,
        adminusername: adminUsername,
        adminpassword: await hashPassword(adminPassword),
      },
    });

    res.status(201).json({ success: true, admin });
  } catch (err) {
    console.error(err);
    const errResult = handleError(err);
    res.status(500).json(errResult);
  }
});

export default addAdmin;
