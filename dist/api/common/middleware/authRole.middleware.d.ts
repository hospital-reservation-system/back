import { NextFunction, Request, Response } from "express";
/** 인증 & 인가 미들웨어 */
export declare const authRoleMiddleware: (roles: role[]) => (req: Request, res: Response, next: NextFunction) => void;
