"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminMiddleware = void 0;
const http_exception_1 = __importDefault(require("../exceptions/http.exception"));
const jwt_service_1 = require("../services/jwt.service");
/** 인증 미들웨어 */
const authAdminMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            throw new http_exception_1.default(401, "토큰이 없습니다.");
        }
        const tokenValue = token.split("Bearer ")[1];
        const payload = jwt_service_1.JwtService.verifyAccessToken(tokenValue);
        console.log(payload);
        req.admin = {
            id: payload.id,
            role: payload.role,
        };
        next();
    }
    catch (error) {
        next(new http_exception_1.default(401, `인증 실패 ${error.message}`));
    }
};
exports.authAdminMiddleware = authAdminMiddleware;
//# sourceMappingURL=authAdmin.middleware.js.map