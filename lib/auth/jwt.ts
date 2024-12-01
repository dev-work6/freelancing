import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const signToken = (payload: Record<string, unknown>) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
};

export const getTokenFromHeader = (authorization: string | undefined) => {
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return null;
  }
  return authorization.split(" ")[1];
};
