import { AdminRepository } from "@/api/admin/repository/admin.repository";
export declare class MongooseAdminRepository implements AdminRepository {
    /** 회원가입(role = admin, hospital) */
    save(admin: Omit<IAdmin, "id">): Promise<IAdmin>;
    /** 관리자 전체 조회(role = admin) */
    findAll(): Promise<IAdmin[]>;
    /** 관리자 조회(role = admin) */
    findById(id: string): Promise<IAdmin | null>;
    /** 관리자 수정(role = admin) */
    update(id: string, updateAdminInfo: IAdmin): Promise<void>;
    /** 관리자 삭제(role = admin) */
    delete(id: string): Promise<void>;
    findByEmail(email: string): Promise<IAdmin | null>;
}
