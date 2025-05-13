const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());
// Read a user
app.get("/api/users/:userId", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user WHERE userID = $1", [
      parseInt(req.params.userId),
    ]);

    if (result.rows.length === 0) {
      return res.status(404).send("Couldn't find the user with this ID!🧐");
    }
    res.send(result.rows[0]);
  } catch (err) {
    res.status(500).send("Error fetching user from database");
  }
});
//Read all
app.get("/api/users", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM user");
    res.send(rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Error fetching users from database");
  }
});
// Create
app.post("/api/user", async (req, res) => {
  const schema = Validate();
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Naomi start checking  here to line 65

  try {
    const { rows } = await pool.query(
      `INSERT INTO user (
        FirstName, MiddleName, LastName, BaptismalName, 
        ConfessionFather, BirthDate, Phone, UserEmail, 
        Nationality, RegionNumber, HasAdvisor, Participation, 
        RoleType, DepartmentName, Batch, MealCard, SponsorshipType
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *`,
      [
        req.body.firstName,
        req.body.middleName,
        req.body.lastName,
        req.body.baptismalName,
        req.body.confessionFather,
        req.body.birthDate,
        req.body.phone,
        req.body.userEmail,
        req.body.nationality,
        req.body.regionNumber,
        req.body.isAdvisor,
        req.body.participation,
        req.body.roleType,
        req.body.departmentName,
        req.body.batch,
        req.body.mealCard,
        req.body.sponsorshipType,
      ]
    );
    res.status(201).send(rows[0]);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Error creating user in database");
  }
});
// Update
app.put("/api/users/:userId", async (req, res) => {
  const schema = Validate();
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Naomi start checking again here to 123

  try {
    const { rows, rowCount } = await pool.query(
      `UPDATE "user" 
       SET 
           "FirstName" = $1,
           "MiddleName" = $2,
           "LastName" = $3,
           "BaptismalName" = $4,
           "ConfessionFather" = $5,
           "BirthDate" = $6,
           "Phone" = $7,
           "UserEmail" = $8,
           "Nationality" = $9,
           "RegionNumber" = $10,
           "HasAdvisor" = $11,
           "Participation" = $12,
           "RoleType" = $13,
           "DepartmentName" = $14,
           "Batch" = $15,
           "MealCard" = $16,
           "SponsorshipType" = $17
       WHERE "user_id" = $18 
       RETURNING *`,
      [
        req.body.FirstName,
        req.body.MiddleName,
        req.body.LastName,
        req.body.BaptismalName,
        req.body.ConfessionFather,
        req.body.BirthDate,
        req.body.Phone,
        req.body.UserEmail,
        req.body.Nationality,
        req.body.RegionNumber,
        req.body.HasAdvisor,
        req.body.Participation,
        req.body.RoleType,
        req.body.DepartmentName,
        req.body.Batch,
        req.body.MealCard,
        req.body.SponsorshipType,
        req.params.userId,
      ]
    );
    if (rowCount === 0) {
      return res.status(404).send("Couldn't find the user with this ID!🧐");
    }
    res.send(rows[0]);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Error updating user in database");
  }
});
//Delete
app.delete("/api/users/:userId", async (req, res) => {
  try {
    const { rows, rowCount } = await pool.query(
      "DELETE FROM user WHERE userID = $1 RETURNING *",
      [req.params.userId]
    );
    if (rowCount === 0) {
      return res.status(404).send("Couldn't find the user with this ID!🧐");
    }
    res.send(rows[0]);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Error deleting user from database");
  }
});
// Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on the port ${port}...`);
});
const Validate = function () {
  return Joi.object({
    firstName: Joi.string().min(2).required(),
    middleName: Joi.string().allow("").optional(),
    lastName: Joi.string().min(2).required(),
    baptismalName: Joi.string().allow("").optional(),
    confessionFather: Joi.string().allow("").optional(),
    birthDate: Joi.date().iso().required(),
    phone: Joi.string()
      .pattern(/^(09|07)[0-9]{8}$/)
      .required(),
    userEmail: Joi.string().email().required(),
    nationality: Joi.string().required(),
    regionNumber: Joi.string()
      .pattern(/^[0-9]+$/)
      .required(),
    hasAdvisor: Joi.boolean().default(false),
    participation: Joi.string().allow("").default("none"),
    roleType: Joi.string()
      .valid("representative", "member", "none")
      .default("none"),
    departmentName: Joi.string().required(),
    batch: Joi.string().required(),
   mealCard: Joi.string()
      .pattern(/^[0-9]{3,4}$/)
      .allow("")
      .optional(),
    sponsorshipType: Joi.string()
      .valid("Self-Sponsored", "Government")
      .default("Government"),
  });
};
