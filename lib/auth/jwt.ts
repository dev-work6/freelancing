import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const signToken = (payload: Omit<JWTPayload, "iat" | "exp">) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token: string): JWTPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
};

export const getTokenFromHeader = (authorization: string | undefined): string | null => {
  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }
  return authorization.split(" ")[1];
};
