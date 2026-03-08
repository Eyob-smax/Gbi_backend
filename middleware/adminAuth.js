import jwt from "jsonwebtoken";

function buildToken(res, studentid) {
  const token = jwt.sign({ studentid }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    // secure cookies only over HTTPS in production
    secure: process.env.NODE_ENV === "production",
    // when using secure:false on localhost you may omit sameSite or use "lax"
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
    maxAge: 10 * 24 * 60 * 60 * 1000,
  });
}

export default buildToken;
