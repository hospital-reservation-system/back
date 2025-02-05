import { NextFunction, Request, Response } from "express";
import { AdminService } from "@/api/admin/service/admin.service.type";
export default class AdminController {
    private _adminService;
    constructor(_adminService: AdminService);
    /** 회원가입(role = admin, hospital) */
    signup(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 관리자 전체 조회(role = admin) */
    getAdmins(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 관리자 조회(role = admin) */
    getAdmin(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 관리자 수정(role = admin) */
    updateAdmin(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 관리자 삭제(role = admin) */
    deleteAdmin(req: Request, res: Response, next: NextFunction): Promise<void>;
}
