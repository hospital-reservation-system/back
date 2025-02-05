"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    static ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access";
    static REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "refresh";
    /** 엑세스 토큰 검증 */
    static verifyAccessToken(token) {
        const secret = this.ACCESS_TOKEN_SECRET;
        return jsonwebtoken_1.default.verify(token, secret);
    }
    /** 리프레시 토큰 검증 */
    static verifyRefreshToken(token) {
        const secret = this.REFRESH_TOKEN_SECRET;
        return jsonwebtoken_1.default.verify(token, secret);
    }
    /** 엑세스 토큰 발행 */
    static generateAccessToken(params) {
        const { id, expiresIn, role } = params;
        console.log(params);
        return jsonwebtoken_1.default.sign({ id, role: role ?? "hospital" }, this.ACCESS_TOKEN_SECRET, {
            expiresIn: expiresIn || "1h",
        });
    }
    /** 리프레시 토큰 발행 */
    static generateRefreshToken(params) {
        const { id, expiresIn } = params;
        return jsonwebtoken_1.default.sign({ id }, this.REFRESH_TOKEN_SECRET, {
            expiresIn: expiresIn || "14d",
        });
    }
}
exports.JwtService = JwtService;
//# sourceMappingURL=jwt.service.js.map