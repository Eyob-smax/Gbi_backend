import jwt from "jsonwebtoken";

const AUTH_COOKIE_NAME = "jwt";
const AUTH_COOKIE_MAX_AGE = 10 * 24 * 60 * 60 * 1000;

export function getAuthCookieOptions() {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "Lax",
    path: "/",
  };
}

export function clearAuthCookie(res) {
  res.clearCookie(AUTH_COOKIE_NAME, getAuthCookieOptions());
}

function buildToken(res, studentid) {
  const token = jwt.sign({ studentid }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie(AUTH_COOKIE_NAME, token, {
    ...getAuthCookieOptions(),
    maxAge: AUTH_COOKIE_MAX_AGE,
  });
}

export default buildToken;
