export interface AdminRepository {
  /** 회원가입(role = admin, hospital) */
  signup(admin: Omit<IAdmin, "id">): Promise<IAdmin>;
  /** 관리자 전체 조회(role = admin) */
  getAdmins(): Promise<IAdmin[]>;
  /** 관리자 조회(role = admin) */
  getAdmin(id: string): Promise<IAdmin>;
  /** 관리자 수정(role = admin) */
  updateAdmin(id: string, admin: Partial<IAdmin>): Promise<void>;
  /** 관리자 삭제(role = admin) */
  deleteAdmin(id: string): Promise<void>;
  /** 병원 목록 조회(role = admin) */
  getHospitals(): Promise<IHospital[]>;
  /** 병원 수정(role = hospital) */
  updateHospital(id: string, admin: IAdmin): Promise<IAdmin>;
  /** 병원 삭제(role = hospital) */
  deleteHospital(id: string): Promise<void>;
  /** 병원 상세 조회(role = hospital) */
  getHospital(id: string): Promise<IAdmin>;

  findById(adminId: string): Promise<IAdmin | null>;
  findByEmail(email: string): Promise<IAdmin | null>;
}