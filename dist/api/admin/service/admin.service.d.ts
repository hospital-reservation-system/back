import { AdminService } from "@/api/admin/service/admin.service.type";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
export declare class AdminServiceImpl implements AdminService {
    private readonly _adminRepository;
    constructor(_adminRepository: AdminRepository);
    /** 회원가입(role = admin, hospital) */
    signUp(params: Omit<IAdmin, "id" | "role">): Promise<IAdmin>;
    /** 관리자 전체 조회(role = admin) */
    getAdmins(): Promise<IAdmin[]>;
    /** 관리자 조회(role = admin) */
    getAdmin(id: string): Promise<IAdmin>;
    /** 관리자 수정(role = admin) */
    updateAdmin(id: string, params: Partial<Omit<IAdmin, "id" | "order">>): Promise<void>;
    /** 관리자 삭제(role = admin) */
    deleteAdmin(id: string): Promise<void>;
}
