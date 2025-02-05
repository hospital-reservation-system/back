"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    _authService;
    constructor(_authService) {
        this._authService = _authService;
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await this._authService.login(email, password);
            res.status(200).json({
                message: "로그인 성공",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({ message: "로그인 실패" });
        }
    }
    async logout(req, res, next) {
        try {
            res.clearCookie("accessToken", { path: "/" });
            res.status(200).send("로그아웃 성공");
            // res.redirect('/')
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map