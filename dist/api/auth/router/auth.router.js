"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("@/api/auth/controller/auth.controller"));
const auth_service_1 = require("@/api/auth/service/auth.service");
const mongooseAdmin_repository_1 = require("@/api/admin/repository/mongooseAdmin.repository");
const path_util_1 = require("@/utils/path.util");
const index_1 = require("@/api/index");
const authRouter = express_1.default.Router();
const AUTH_ROUTES = {
    /** 로그인 */
    LOGIN: `/api/auth/login`,
    /** 로그아웃 */
    LOGOUT: `/api/auth/logout`,
};
const authController = new auth_controller_1.default(new auth_service_1.AuthServiceImpl(new mongooseAdmin_repository_1.MongooseAdminRepository()));
/** 로그인 */
authRouter.post((0, path_util_1.extractPath)(AUTH_ROUTES.LOGIN, index_1.ROUTES_INDEX.AUTH_API), authController.login);
/** 로그아웃 */
authRouter.post((0, path_util_1.extractPath)(AUTH_ROUTES.LOGOUT, index_1.ROUTES_INDEX.AUTH_API), authController.logout);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map