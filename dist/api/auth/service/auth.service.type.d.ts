export interface AuthService {
    /** 로그인 */
    login(email: string, password: string): Promise<string>;
    /** 로그아웃 */
    logout(): Promise<void>;
}
