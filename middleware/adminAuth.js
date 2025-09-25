import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function buildToken(res, studentid, username) {
  const generalAdmin = JSON.parse(process.env.SUPER_ADMINS);
  const isAdmin = generalAdmin.includes(username);

  const token = jwt.sign({ studentid, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 10 * 24 * 60 * 60 * 1000,
  });
}

export default buildToken;
