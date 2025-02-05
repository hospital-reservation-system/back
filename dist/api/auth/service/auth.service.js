"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceImpl = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const jwt_service_1 = require("@/api/common/services/jwt.service");
class AuthServiceImpl {
    _adminRepository;
    constructor(adminRepository) {
        this._adminRepository = adminRepository;
    }
    async login(email, password) {
        let findEmail = await this._adminRepository.findByEmail(email);
        if (!findEmail) {
            throw new http_exception_1.default(404, "존재하지 않는 회원입니다.");
        }
        console.log(findEmail);
        const plainPassword = password; // 사용자가 입력한 비밀번호 (일반 텍스트)
        const hashedPassword = findEmail.password; // 데이터베이스에서 가져온 해싱된 비밀번호
        const isSamePassword = await bcryptjs_1.default.compare(plainPassword, hashedPassword);
        if (!isSamePassword) {
            throw new http_exception_1.default(401, "비밀번호가 일치하지 않습니다.");
        }
        const accessToken = jwt_service_1.JwtService.generateAccessToken({
            id: findEmail.id,
            role: findEmail.role,
            expiresIn: "7d",
        });
        return accessToken;
    }
    async logout() { }
}
exports.AuthServiceImpl = AuthServiceImpl;
//# sourceMappingURL=auth.service.js.map