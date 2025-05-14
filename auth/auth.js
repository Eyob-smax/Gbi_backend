import { prisma } from "../models/DatabaseConfig.js";
import { checkPassword } from "../utils/util.js";

async function checkUser(id, password) {
  try {
    const admin = await prisma.admin.findUnique({
      where: { studentid: id },
    });

    if (!admin) {
      return {
        success: false,
        message: "Can't find the admin with the given id!",
      };
    }

    if (!(await checkPassword(password, admin.adminpassword))) {
      return { success: false, message: "Incorrect password!" };
    }
    if (id !== admin.adminpassword) {
      return { success: false, message: "Incorrect student id!" };
    }

    return { success: true, message: "User authenticated" };
  } catch (err) {}
}

export default checkUser;
