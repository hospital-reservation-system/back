import jwt from "jsonwebtoken";
type Params = {
    /** ID */
    id: string;
    /** 역할 */
    role?: role;
    /** 만료 시간 */
    expiresIn?: string;
};
export declare class JwtService {
    static readonly ACCESS_TOKEN_SECRET: string;
    static readonly REFRESH_TOKEN_SECRET: string;
    /** 엑세스 토큰 검증 */
    static verifyAccessToken(token: string): jwt.JwtPayload;
    /** 리프레시 토큰 검증 */
    static verifyRefreshToken(token: string): jwt.JwtPayload;
    /** 엑세스 토큰 발행 */
    static generateAccessToken(params: Params): string;
    /** 리프레시 토큰 발행 */
    static generateRefreshToken(params: Omit<Params, "role">): string;
}
export {};
