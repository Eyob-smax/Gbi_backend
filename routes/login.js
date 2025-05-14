import express from "express";
import { handleError } from "../utils/util.js";
import checkUser from "../auth/auth.js";

const login = express.Router();

login.get("/", async (req, res) => {
  try {
    const { studentId, password } = req.body;
    const { success, message } = await checkUser(studentId, password);
    if (!success) {
      return res.status(400).json({ success: false, message });
    }
  } catch (err) {
    const errorResult = handleError(err);
    return res.status(200).json(errorResult);
  }
});

export default login;
