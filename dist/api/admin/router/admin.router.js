"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_controller_1 = __importDefault(require("@/api/admin/controller/admin.controller"));
const admin_service_1 = require("@/api/admin/service/admin.service");
const mongooseAdmin_repository_1 = require("@/api/admin/repository/mongooseAdmin.repository");
const express_1 = __importDefault(require("express"));
const path_util_1 = require("@/utils/path.util");
const index_1 = require("@/api/index");
const authAdmin_middleware_1 = require("@/api/common/middleware/authAdmin.middleware");
const authRole_middleware_1 = require("@/api/common/middleware/authRole.middleware");
const adminRouter = express_1.default.Router();
// const adminService = new AdminServiceImpl(new MongooseAdminRepository());
// const adminController = new AdminController(adminService);
const adminController = new admin_controller_1.default(new admin_service_1.AdminServiceImpl(new mongooseAdmin_repository_1.MongooseAdminRepository()
// new MongooseSelectProductRepository()
));
const ADMIN_ROUTES = {
    /** 회원가입(role = admin, hospital)(post) */
    SIGN_UP: `/api/admin/`,
    /** 관리자 전체 조회(role = admin)(get) */
    GET_ADMINS: `/api/admin/`,
    /** 관리자 조회(role = admin)(get) */
    // req.admin.id로 조회하기
    GET_ADMIN: `/api/admin/me`,
    /** 관리자 수정(role = admin)(put) */
    UPDATE_ADMIN: `/api/admin/`,
    /** 관리자 삭제(role = admin)(delete) */
    DELETE_ADMIN: `/api/admin/:id`,
};
/** 회원가입(role = admin, hospital) */
adminRouter.post((0, path_util_1.extractPath)(ADMIN_ROUTES.SIGN_UP, index_1.ROUTES_INDEX.ADMIN_API), adminController.signup);
/** 관리자 전체 조회(role = admin) */
adminRouter.get((0, path_util_1.extractPath)(ADMIN_ROUTES.GET_ADMINS, index_1.ROUTES_INDEX.ADMIN_API), (0, authRole_middleware_1.authRoleMiddleware)(["admin", "hospital"]), adminController.getAdmins);
/** 관리자 조회(role = admin) */
adminRouter.get((0, path_util_1.extractPath)(ADMIN_ROUTES.GET_ADMIN, index_1.ROUTES_INDEX.ADMIN_API), (0, authRole_middleware_1.authRoleMiddleware)(["admin", "hospital"]), authAdmin_middleware_1.authAdminMiddleware, adminController.getAdmin);
/** 관리자 수정(role = admin) */
adminRouter.put((0, path_util_1.extractPath)(ADMIN_ROUTES.UPDATE_ADMIN, index_1.ROUTES_INDEX.ADMIN_API), (0, authRole_middleware_1.authRoleMiddleware)(["admin", "hospital"]), authAdmin_middleware_1.authAdminMiddleware, adminController.updateAdmin);
/** 관리자 삭제(role = admin) */
adminRouter.delete((0, path_util_1.extractPath)(ADMIN_ROUTES.DELETE_ADMIN, index_1.ROUTES_INDEX.ADMIN_API), (0, authRole_middleware_1.authRoleMiddleware)(["admin"]), authAdmin_middleware_1.authAdminMiddleware, adminController.deleteAdmin);
exports.default = adminRouter;
//# sourceMappingURL=admin.router.js.map