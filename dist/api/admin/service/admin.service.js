"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminServiceImpl = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AdminServiceImpl {
    _adminRepository;
    constructor(_adminRepository) {
        this._adminRepository = _adminRepository;
    }
    /** 회원가입(role = admin, hospital) */
    async signUp(params) {
        try {
            const findAdmin = await this._adminRepository.findByEmail(params.email);
            if (findAdmin) {
                throw new http_exception_1.default(409, "이미 존재하는 이메일입니다.");
            }
            const salt = await bcryptjs_1.default.genSalt(10);
            const saltedPassword = await bcryptjs_1.default.hash(params.password, salt);
            const newAdmin = await this._adminRepository.save({
                ...params,
                password: saltedPassword,
                role: "hospital",
            });
            console.log(newAdmin);
            return newAdmin;
        }
        catch (error) {
            throw error;
        }
    }
    /** 관리자 전체 조회(role = admin) */
    async getAdmins() {
        const admins = await this._adminRepository.findAll();
        return admins;
    }
    /** 관리자 조회(role = admin) */
    async getAdmin(id) {
        const admin = await this._adminRepository.findById(id);
        if (!admin) {
            throw new http_exception_1.default(404, "해당 관리자는 존재하지 않습니다.");
        }
        return admin;
    }
    /** 관리자 수정(role = admin) */
    async updateAdmin(id, params) {
        const findAdmin = await this._adminRepository.findById(id);
        if (!findAdmin) {
            throw new http_exception_1.default(404, "해당 관리자는 존재하지 않습니다.");
        }
        const updatedAdmin = await this._adminRepository.update(id, {
            ...params,
        });
        return updatedAdmin;
    }
    /** 관리자 삭제(role = admin) */
    async deleteAdmin(id) {
        const admin = await this._adminRepository.findById(id);
        if (!admin) {
            throw new http_exception_1.default(404, "해당 관리자는 존재하지 않습니다.");
        }
        await this._adminRepository.delete(id);
        return;
    }
}
exports.AdminServiceImpl = AdminServiceImpl;
//# sourceMappingURL=admin.service.js.map