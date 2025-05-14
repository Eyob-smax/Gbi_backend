import express from "express";
import { JoiValidator } from "../../utils/util.js";
const schema = JoiValidator();
import { prisma } from "../../models/DatabaseConfig.js";

const add = express.Router();

add.post("/user", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await prisma.user.create({
      data: {
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        gender: req.body.gender,
        baptismalname: req.body.baptismalname,
        phone: req.body.phone,
        birthdate: new Date(req.body.birthdate),
        useremail: req.body.useremail,
        nationality: req.body.nationality,
        regionnumber: req.body.regionnumber,
        universityusers: {
          create: {
            departmentname: req.body.departmentname,
            sponsorshiptype: req.body.sponsorshiptype,
            participation: req.body.participation,
            batch: req.body.batch,
            confessionfather: req.body.confessionfather || null,
            advisors: req.body.isAdvisor === "yes" ? "yes" : "no",
            role: req.body.roleType,
            mealcard: req.body.mealCard || null,
            cafeteriaaccess: !!req.body.mealCard,
          },
        },
      },
      include: {
        universityusers: true,
      },
    });

    res.status(201).json({ success: true, user });
  } catch (err) {
    console.error("❌ Database error:", err);

    const errResult = handleError(err);
    res.status(500).json(errResult);
  }
});

export default add;
