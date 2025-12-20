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
    studentid: Joi.string().max(20).required(),
    firstname: Joi.string().max(50).required(),
    middlename: Joi.string().max(50).required(),
    lastname: Joi.string().max(50).required(),
    gender: Joi.string().valid("Male", "Female").required(),
    baptismalname: Joi.string().max(50).allow("", null).default("None"),
    phone: Joi.string().max(20).required(),
    birthdate: Joi.date().iso().required(),
    useremail: Joi.string()
      .email({ tlds: { allow: false } })
      .optional()
      .max(320)
      .allow("", null)
      .allow("not_specified")
      .default("not_specified"),
    nationality: Joi.string().max(50).required(),
    region: Joi.string()
      .valid(
        "Addis_Ababa",
        "Dire_Dawa",
        "Tigray",
        "Afar",
        "Amhara",
        "Oromia",
        "Somali",
        "Benishangul_Gumuz",
        "SNNPR",
        "Sidama",
        "South_West_Ethiopia_Peoples_Region",
        "Central_Ethiopia_Region",
        "South_Ethiopia_Region",
        "Harari",
        "not_specified"
      )
      .default("not_specified"),
    mothertongue: Joi.string()
      .valid(
        "Amharic",
        "Oromifa",
        "Tigrigna",
        "English",
        "Other",
        "not_specified"
      )
      .default("not_specified"),
    zonename: Joi.string().max(50).allow("", null).default("not_specified"),
    isphysicallydisabled: Joi.string()
      .valid(
        "None",
        "Physical",
        "Visual",
        "Hearing",
        "Intellectual",
        "Psychosocial",
        "Other"
      )
      .default("None"),
    clergicalstatus: Joi.string()
      .valid("Deacon", "Priest", "Other", "None")
      .default("None"),
    telegram_username: Joi.string()
      .max(50)
      .allow("", null)
      .default("not_specified"),

    // Nested universityusers
    universityusers: Joi.object({
      departmentname: Joi.string().max(100).required(),
      sponsorshiptype: Joi.string()
        .valid("Government", "Self_Sponsored", "Scholarship")
        .required(),
      participation: Joi.string()
        .valid(
          "Gbi_Gubaye_Secretariat",
          "Audit_and_Inspection_Section",
          "Education_and_Apostolic_Service_Section",
          "Accounting_and_Assets_Section",
          "Development_and_Income_Collection_Section",
          "Languages_and_Special_Interests_Section",
          "Hymns_and_Arts_Section",
          "Planning_Monitoring_Reports_and_Information_Management_Section",
          "Professional_and_Community_Development_Section",
          "Batch_and_Programs_Coordination_Section",
          "Member_Care_Advice_and_Capacity_Building_Section",
          "None"
        )
        .required(),
      batch: Joi.number().integer().positive().required(),
      coursetaken: Joi.boolean().default(true),
      tookcourse: Joi.boolean().allow(null),
      cafeteriaaccess: Joi.boolean().allow(null),
      holidayincampus: Joi.boolean().allow(null),
      mealcard: Joi.string().max(100).allow("", null).default("not_specified"),
      cafeterianame: Joi.string().max(100).allow("", null),
      emergencyname: Joi.string().max(100).allow("", null),
      emergencyphone: Joi.string().max(20).allow("", null),
      confessionfather: Joi.string()
        .max(100)
        .allow("", null)
        .default("not_specified"),
      advisors: Joi.string().valid("Yes", "No").default("No"),
      role: Joi.string()
        .valid(
          "Member",
          "ClassSecretary",
          "ClassTeamLead",
          "ClassManager",
          "SubclassSecretary",
          "SubclassTeamLead",
          "SubclassManager",
          "None"
        )
        .required(),
      activitylevel: Joi.string()
        .valid("Very_Active", "Active", "Less_Active", "Not_Active")
        .default("Active"),
    }).required(),
  }).options({ stripUnknown: true });
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
