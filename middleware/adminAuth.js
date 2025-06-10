import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function buildToken(res, studentid, username) {
  const generalAdmin = process.env.ADMIN_USERNAME;
  const isAdmin = username === generalAdmin ? true : false;
  const token = jwt.sign(
    { studentid, isAdmin, generalAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    }
  );
  res.cookie("jwt", token, {
    httpObly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });
}

export default buildToken;
