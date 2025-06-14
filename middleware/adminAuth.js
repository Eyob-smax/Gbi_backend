import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function buildToken(res, studentid, username) {
  const generalAdmin = process.env.SUPER_ADMIN_USERNAME;
  const isAdmin = username === generalAdmin;

  const token = jwt.sign({ studentid, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    path: "/",
    maxAge: 10 * 24 * 60 * 60 * 1000,
  });
}

export default buildToken;
