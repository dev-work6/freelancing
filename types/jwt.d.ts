declare interface JWTPayload {
  userId: string;
  email: string;
  role: "user" | "admin";
  iat: number;
  exp: number;
}

declare module "jsonwebtoken" {
  export function verify(token: string, secretOrPublicKey: string): string | JWTPayload;
} 