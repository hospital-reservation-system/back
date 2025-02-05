export interface AdminRepository {
    /** 회원가입(role = admin, hospital) */
    save(admin: Omit<IAdmin, "id">): Promise<IAdmin>;
    /** 관리자 전체 조회(role = admin) */
    findAll(): Promise<IAdmin[]>;
    /** 관리자 조회(role = admin) */
    findById(id: string): Promise<IAdmin | null>;
    /** 관리자 수정(role = admin) */
    update(id: string, updateAdminInfo: Partial<IAdmin>): Promise<void>;
    /** 관리자 삭제(role = admin) */
    delete(id: string): Promise<void>;
    /** 이메일로 조회 */
    findByEmail(email: string): Promise<IAdmin | null>;
}
