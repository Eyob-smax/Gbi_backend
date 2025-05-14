import Joi from "joi";
import bcrypt from "bcrypt";

export function JoiValidator() {
  return Joi.object({
    firstname: Joi.string().max(50).required(),
    middlename: Joi.string().max(50).required(),
    lastname: Joi.string().max(50).required(),
    gender: Joi.string().valid("Male", "Female").required(),
    baptismalname: Joi.string().max(50).required(),
    phone: Joi.string().max(10).required(),
    birthdate: Joi.date().required(),
    useremail: Joi.string().email().max(320).required(),
    nationality: Joi.string().max(20).required(),
    regionnumber: Joi.number().integer().required(),
    disabled: Joi.string().valid("Yes", "No"),
    zonename: Joi.string().max(50),
    mothertongue: Joi.string(),
    departmentname: Joi.string().required(),
    sponsorshiptype: Joi.string()
      .valid("Government", "Self_Sponsored")
      .required(),
    participation: Joi.string().required(),
    cafeteriaaccess: Joi.string().required(),
    batch: Joi.string().max(4).required(),
    confessionfather: Joi.string().allow(null, ""),
    advisors: Joi.string().required(),
    role: Joi.string().required(),
    mealcard: Joi.string().allow(null, ""),
  });
}

export function JoiAdminValidator() {
  return Joi.object({
    studentId: Joi.string().max(15).required().pattern(/^UGR/),
    adminUsername: Joi.string().max(50).required(),
    adminPassword: Joi.string().max(50).required(),
  });
}

export function handleError(err) {
  if (err.code === "P2002") {
    return { success: false, message: "Email or phone already exists." };
  }

  if (err.code === "P2000") {
    return { success: false, message: "Value too long for column!" };
  }

  if (err.code === "P2005") {
    return {
      success: false,
      message: "Null value in a non-nullable field",
    };
  }
  if (err.code === "P2015") {
    return {
      success: false,
      message: "Missing required argument",
    };
  }

  if (err.code === "P2014") {
    return {
      success: false,
      message: "Unsupported data type",
    };
  }
  if (err.code === "P2016") {
    return {
      success: false,
      message: "Operation timed out",
    };
  }

  return { success: false, message: err.message };
}

export async function checkPassword(password, storedpassword) {
  return await bcrypt.compare(password, storedpassword);
}

export async function hashPassword(password) {
  try {
    return await bcrypt.hash(password, 10);
  } catch (err) {
    console.log(err);
    return err;
  }
}
