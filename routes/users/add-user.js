import express from "express";
import { JoiValidator } from "../../utils/util.js";
const schema = JoiValidator();
import { prisma } from "../../models/DatabaseConfig.js";
import { handleError } from "../../utils/util.js";

const add = express.Router();

add.post("/user", async (req, res) => {
  console.log(req.body);
  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

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
        disabled: req.body.disabled || "No",
        mothertongue: req.body.mothertongue,
        zonename: req.body.zonename,
        universityusers: {
          create: {
            departmentname: req.body.departmentname,
            sponsorshiptype: req.body.sponsorshiptype,
            participation: req.body.participation,
            batch: req.body.batch,
            confessionfather: req.body.confessionfather || null,
            advisors: "yes",
            role: req.body.role,
            mealcard: req.body.mealcard || null,
            cafeteriaaccess: !!req.body.mealcard,
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
