import { AuthService } from "@/api/auth/service/auth.service.type";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
export declare class AuthServiceImpl implements AuthService {
    private readonly _adminRepository;
    constructor(adminRepository: AdminRepository);
    login(email: string, password: string): Promise<string>;
    logout(): Promise<void>;
}
