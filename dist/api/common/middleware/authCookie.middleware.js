"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCookieViewMiddleware = void 0;
const http_exception_1 = __importDefault(require("../exceptions/http.exception"));
const jwt_service_1 = require("../services/jwt.service");
/** 쿠키속 토큰으로 인증하는 인증 미들웨어 */
const authCookieViewMiddleware = (authRedirect = true) => {
    return (req, res, next) => {
        try {
            const token = req.cookies.accessToken;
            const tokenValue = token.split("Bearer ")[1];
            console.log(req);
            if (!token) {
                req.admin = {
                    id: "",
                    role: "hospital",
                };
                if (authRedirect) {
                    throw new http_exception_1.default(401, "인증 실패");
                }
                next();
                return;
            }
            const payload = jwt_service_1.JwtService.verifyAccessToken(tokenValue);
            req.admin = {
                id: payload.id,
                role: payload.role,
            };
            next();
        }
        catch (error) {
            // next(new HttpException(401, `인증 실패 ${error.message}`));
            res.status(302).redirect(`/auth/login?redirect=${req.originalUrl || ""}`);
        }
    };
};
exports.authCookieViewMiddleware = authCookieViewMiddleware;
//# sourceMappingURL=authCookie.middleware.js.map