import express, { Router } from "express";
import AuthController from "@/api/auth/controller/auth.controller";
import { AuthServiceImpl } from "@/api/auth/service/auth.service";
import { MongooseAdminRepository } from "@/api/admin/repository/mongooseAdmin.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/api/index";

const authRouter: Router = express.Router();

const AUTH_ROUTES = {
  /** 로그인 */
  LOGIN: `/api/auth/login`,
  /** 로그아웃 */
  LOGOUT: `/api/auth/logout`,
} as const;

const authController = new AuthController(
  new AuthServiceImpl(new MongooseAdminRepository())
);

/** 로그인 */
authRouter.post(
  extractPath(AUTH_ROUTES.LOGIN, ROUTES_INDEX.AUTH_API),
  authController.login
);

/** 로그아웃 */
authRouter.post(
  extractPath(AUTH_ROUTES.LOGOUT, ROUTES_INDEX.AUTH_API),
  authController.logout
);

export default authRouter;
