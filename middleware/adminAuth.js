import jwt from "jsonwebtoken";

function buildToken(res, studentid, username) {
  const isAdmin = username === "Gbi_Admin@123" ? true : false;
  const token = jwt.sign({ studentid, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  res.cookie("jwt", token, {
    httpObly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
}

export default buildToken;
