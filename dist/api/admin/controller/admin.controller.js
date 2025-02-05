"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AdminController {
    _adminService;
    // 다른 곳에서 만든 서비스 컨트롤러에서 주입
    constructor(_adminService) {
        this._adminService = _adminService;
        this.signup = this.signup.bind(this);
        this.getAdmins = this.getAdmins.bind(this);
        this.getAdmin = this.getAdmin.bind(this);
        this.updateAdmin = this.updateAdmin.bind(this);
        this.deleteAdmin = this.deleteAdmin.bind(this);
    }
    /** 회원가입(role = admin, hospital) */
    async signup(req, res, next) {
        console.log(req.body);
        try {
            const admin = await this._adminService.signUp({
                email: req.body.email,
                password: req.body.password,
                hospitalName: req.body.hospitalName,
                address: req.body.address,
                businessNumber: req.body.businessNumber,
                hospital: req.body.hospital,
            });
            res.status(201).json({ message: "회원가입 성공", data: admin });
        }
        catch (error) {
            next(error);
        }
    }
    /** 관리자 전체 조회(role = admin) */
    async getAdmins(req, res, next) {
        try {
            const admins = await this._adminService.getAdmins();
            res.status(200).json({
                message: "관리자 목록 조회 성공",
                data: admins,
            });
        }
        catch (error) {
            res.status(400).json({ message: "관리자 목록 조회 실패" });
            next(error);
        }
    }
    /** 관리자 조회(role = admin) */
    async getAdmin(req, res, next) {
        try {
            const { id } = req.admin;
            console.log(id);
            const admin = await this._adminService.getAdmin(id);
            res.status(200).json({
                message: "관리자 상세 조회 성공",
                data: admin,
            });
        }
        catch (error) {
            next(error);
        }
    }
    /** 관리자 수정(role = admin) */
    async updateAdmin(req, res, next) {
        try {
            // const { id } = req.params;
            // await this._adminService.updateAdmin(id, req.body);
            const updateData = { ...req.body };
            if (updateData.password) {
                const saltedPassword = await bcryptjs_1.default.hash(updateData.password, 10);
                updateData.password = saltedPassword;
            }
            const admin = await this._adminService.updateAdmin(req.admin.id, updateData);
            res.status(200).json({
                message: "관리자 수정 성공",
                data: admin,
            });
        }
        catch (error) {
            res.status(400).json({ message: "관리자 수정 실패" });
        }
    }
    /** 관리자 삭제(role = admin) */
    async deleteAdmin(req, res, next) {
        try {
            const { id } = req.params;
            await this._adminService.deleteAdmin(id);
            res.status(200).json({ message: "관리자 삭제 성공" });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "관리자 삭제 실패" });
            // next(error);
        }
    }
}
exports.default = AdminController;
//# sourceMappingURL=admin.controller.js.map