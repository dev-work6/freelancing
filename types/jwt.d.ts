declare interface JWTPayload {
  userId: string;
  email: string;
  role: "user" | "admin";
  name: string;
  iat: number;
  exp: number;
}

declare module "jsonwebtoken" {
  export function verify(token: string, secretOrPublicKey: string): JWTPayload;
  export function sign(payload: any, secretOrKey: string, options?: SignOptions): string;
  export interface SignOptions {
    expiresIn?: string | number;
  }
} 