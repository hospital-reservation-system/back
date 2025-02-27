import * as jwt from "jsonwebtoken";

declare module "jsonwebtoken" {
  export interface JwtPayload extends jwt.JwtPayload {
    id: string;
    role: role;
  }
}
