import Joi from "joi";
import { promisify } from "util";
import { scrypt, randomBytes } from "crypto";

const scryptAsync = promisify(scrypt);

export const hashPassword = async (password) => {
  if (!password || typeof password !== "string") {
    throw new Error("Password must be a non-empty string");
  }

  const salt = randomBytes(16).toString("hex");
  const buf = await scryptAsync(password, salt, 64);
  const final = `${buf.toString("hex")}.${salt}`;
  return final;
};

export const comparePassword = async (storedPassword, suppliedPassword) => {
  if (!storedPassword || !suppliedPassword) {
    throw new Error("Both passwords must be provided");
  }

  const [hashedPassword, salt] = storedPassword.split(".");
  if (!hashedPassword || !salt) {
    throw new Error("Stored password has incorrect format");
  }

  const buf = await scryptAsync(suppliedPassword, salt, 64);
  return buf.toString("hex") === hashedPassword;
};
export function JoiValidator() {
  return Joi.object({
    userid: Joi.string().max(15).optional(),
    studentid: Joi.string(),
    firstname: Joi.string().max(50).required(),
    middlename: Joi.string().max(50).required(),
    lastname: Joi.string().max(50).required(),
    gender: Joi.string().valid("Male", "Female").required(),
    baptismalname: Joi.string().max(50).required(),
    phone: Joi.string().required(),
    birthdate: Joi.date().required(),
    useremail: Joi.string().email().max(320).required(),
    nationality: Joi.string().max(50).required(),
    regionnumber: Joi.number().integer().required(),
    disabled: Joi.string(),
    zonename: Joi.string().max(50),
    mothertongue: Joi.string(),
    isphysicallydisabled: Joi.string().required(),
    universityuser: {
      userid: Joi.string().max(15).optional(),
      departmentname: Joi.string().required(),
      sponsorshiptype: Joi.string()
        .valid("Government", "Self_Sponsored", "Scholarship")
        .required(),
      participation: Joi.string().required(),
      cafeteriaaccess: Joi.boolean().required(),
      batch: Joi.number().max(10).required(),
      confessionfather: Joi.string().allow(null, ""),
      advisors: Joi.string().required(),
      role: Joi.string().required(),
      mealcard: Joi.string().allow(null, "").optional().max(10),
    },
  });
}

export function JoiAdminValidator() {
  return Joi.object({
    studentid: Joi.string().max(15).required(),
    adminusername: Joi.string().max(50).required(),
    adminpassword: Joi.string().required(),
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

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
