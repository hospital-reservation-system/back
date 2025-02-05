import { Request, Response, NextFunction } from "express";
/** 쿠키속 토큰으로 인증하는 인증 미들웨어 */
export declare const authCookieViewMiddleware: (authRedirect?: boolean) => (req: Request, res: Response, next: NextFunction) => void;
