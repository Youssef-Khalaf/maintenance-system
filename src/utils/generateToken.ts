import Jwt from "jsonwebtoken";
import { JWTPayload } from "./dtos";

export function generateToken(JWTPayload: JWTPayload) {
  const PrivateKey = process.env.SECRET_KEY as string;
  const token = Jwt.sign(JWTPayload, PrivateKey, {
    expiresIn: "10d",
  });
  return token;
}
