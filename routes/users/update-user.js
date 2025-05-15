import express from "express";
import { JoiValidator } from "../../utils/util.js";
const schema = JoiValidator();
import { handleError } from "../../utils/util.js";
import { prisma } from "../../models/DatabaseConfig.js";

const updateUser = express.Router();

updateUser.put("/user/:id", async (req, res) => {
  const studentId = req.params.id;
  if (!studentId) return res.status(400).json({ error: "Invalid ID format" });
  if (studentId.includes("/"))
    return res.status(400).json({
      success: false,
      error: "Invalid ID format, hint: don't use / use - instead!",
    });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const existingUser = await prisma.user.findUnique({
      where: { studentid: studentId },
      include: { universityusers: true },
    });

    if (!existingUser) return res.status(404).json({ error: "User not found" });

    const updatedUser = await prisma.user.update({
      where: { studentid: studentId },
      data: {
        studentid: req.body.studentid || existingUser.studentid,
        firstname: req.body.firstname || existingUser.firstname,
        middlename: req.body.middlename || existingUser.middlename,
        lastname: req.body.lastname || existingUser.lastname,
        gender: req.body.gender || existingUser.gender,
        baptismalname: req.body.baptismalname || existingUser.baptismalname,
        phone: req.body.phone || existingUser.phone,
        birthdate: req.body.birthdate
          ? new Date(req.body.birthdate)
          : existingUser.birthdate,
        useremail: req.body.useremail || existingUser.useremail,
        nationality: req.body.nationality || existingUser.nationality,
        regionnumber: req.body.regionnumber || existingUser.regionnumber,

        universityusers: {
          update: {
            where: {
              id: existingUser.universityusers[0]?.id,
            },
            data: {
              departmentname:
                req.body.departmentname ||
                existingUser.universityusers[0]?.departmentname,
              sponsorshiptype:
                req.body.sponsorshiptype ||
                existingUser.universityusers[0]?.sponsorshiptype,
              participation:
                req.body.participation ||
                existingUser.universityusers[0]?.participation,
              batch: req.body.batch || existingUser.universityusers[0]?.batch,
              confessionfather:
                req.body.confessionfather !== undefined
                  ? req.body.confessionfather
                  : existingUser.universityusers[0]?.confessionfather,
              advisors:
                req.body.isAdvisor || existingUser.universityusers[0]?.advisors,
              role: req.body.roleType || existingUser.universityusers[0]?.role,
              mealcard:
                req.body.mealCard !== undefined
                  ? req.body.mealCard
                  : existingUser.universityusers[0]?.mealcard,
              cafeteriaaccess:
                req.body.mealCard !== undefined
                  ? !!req.body.mealCard
                  : existingUser.universityusers[0]?.cafeteriaaccess,
            },
          },
        },
      },
      include: {
        universityusers: true,
      },
    });

    res.json({ success: true, updatedUser });
  } catch (err) {
    const errorResult = handleError(err);
    res.status(500).json(errorResult);
  }
});

export default updateUser;
