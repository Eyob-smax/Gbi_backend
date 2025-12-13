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
    userid: Joi.number().allow("", null).optional(),
    studentid: Joi.string(),
    firstname: Joi.string().max(50).required(),
    middlename: Joi.string().max(50).required(),
    lastname: Joi.string().max(50).required(),
    telegram_username: Joi.string().allow("", null).optional(),
    gender: Joi.string().valid("Male", "Female").required(),
    baptismalname: Joi.string().allow("", null).optional(),
    phone: Joi.string().required(),
    birthdate: Joi.date().required(),
    useremail: Joi.string().email().max(320).required(),
    telegramusername: Joi.string().allow("", null).optional(),
    nationality: Joi.string().max(50).required(),
    region: Joi.string().optional(),
    disabled: Joi.string(),
    zonename: Joi.string().allow("", null).optional(),
    mothertongue: Joi.string().optional(),
    isphysicallydisabled: Joi.string().optional(),
    createdAt: Joi.date().optional(),
    clergicalstatus: Joi.string()
      .allow("None", "Priest", "Other", "Deacon", null)
      .optional(),
    universityusers: {
      userid: Joi.number().allow("", null).optional(),
      departmentname: Joi.string().required(),
      sponsorshiptype: Joi.string()
        .valid("Government", "Self_Sponsored", "Scholarship")
        .optional(),
      participation: Joi.string().required(),
      coursetaken: Joi.boolean().allow("", null).optional(),
      cafeteriaaccess: Joi.boolean().optional(),
      cafeterianame: Joi.string().allow("", null).optional(),
      emergencyphone: Joi.string().allow("", null).optional(),
      emergencyname: Joi.string().allow("", null).optional(),
      holidayincampus: Joi.boolean().optional(),
      batch: Joi.number().required(),
      confessionfather: Joi.string().allow("", null).optional(),
      tookcourse: Joi.boolean().allow("", null).optional(),
      activitylevel: Joi.string().allow("", null).optional(),
      advisors: Joi.string().optional(),
      role: Joi.string().required(),
      mealcard: Joi.string().allow("", null).optional().max(20),
      createdAt: Joi.date().allow("", null).optional(),
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
  // --- Common Database Errors (P2xxx) ---

  // P2002: Unique Constraint Violation
  if (err.code === "P2002") {
    // You can extract the violating fields from err.meta.target for a better message
    const fields = err.meta?.target
      ? ` on field(s): ${err.meta.target.join(", ")}`
      : "";
    return {
      success: false,
      message: `Unique constraint failed${fields}. The record already exists.`,
    };
  }

  if (err.code === "P2003") {
    return {
      success: false,
      message: "Foreign key constraint failed. Related record not found.",
    };
  }

  if (err.code === "P2005") {
    return {
      success: false,
      message: "Invalid data value for a database field.",
    };
  }

  if (err.code === "P2010") {
    return {
      success: false,
      message: "Raw database query failed.",
    };
  }

  if (err.code === "P2011") {
    return {
      success: false,
      message: "Required field cannot be null.",
    };
  }

  // P2012: Missing required value
  if (err.code === "P2012") {
    return {
      success: false,
      message: "Missing a required value for a model field.",
    };
  }

  // P2013: Missing required argument
  if (err.code === "P2013") {
    return {
      success: false,
      message: "Missing a required argument in the query.",
    };
  }

  if (err.code === "P2014") {
    return {
      success: false,
      message: "A required relationship link is missing or invalid.",
    };
  }

  if (err.code === "P2015") {
    return {
      success: false,
      message:
        "The record or related record you are looking for does not exist.",
    };
  }

  if (err.code === "P2016") {
    return {
      success: false,
      message: "Error in query interpretation. Please check the query format.",
    };
  }

  if (err.code === "P2025") {
    return {
      success: false,
      message: "Record to delete/update/connect does not exist.",
    };
  }

  if (err.code === "P1012") {
    return {
      success: false,
      message:
        "Configuration error: Environment variable or database URL is missing/invalid.",
    };
  }

  if (err.code && err.code.startsWith("P1")) {
    return {
      success: false,
      message:
        "Database connection error. Please check credentials or firewall settings.",
    };
  }

  return {
    success: false,
    message: err.message || "An unknown error occurred.",
  };
}

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
