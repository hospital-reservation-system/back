import express, { Router } from "express";
import SelectProductController from "@/api/selectProduct/controller/selectProduct.controller";
import { MongooseSelectProductRepository } from "@/api/selectProduct/repository/mongooseSelectProduct.repository";
import { MongooseAdminRepository } from "@/api/admin/repository/mongooseAdmin.repository";
import { SelectProductServiceImpl } from "@/api/selectProduct/service/selectProduct.service";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/api";

const selectProductRouter: Router = express.Router();
const selectProductController = new SelectProductController(
  new SelectProductServiceImpl(
    new MongooseSelectProductRepository(),
    new MongooseAdminRepository()
  )
);

const SELECT_PRODUCT_ROUTER = {
  /** 선택 상품 생성 */
  CREATE_SELECT_PRODUCT: "/api/selectProduct",
  /** 선택 상품 수정 */
  UPDATE_SELECT_PRODUCT: "/api/selectProduct/:selectProductId",
  /** 선택 상품 삭제 */
  DELETE_SELECT_PRODUCT: "/api/selectProduct/:selectProductId",
  /** 선택 상품 조회 */
  GET_SELECT_PRODUCTS: "/api/selectProduct",
  /** 선택 상품 상세 조회 */
  GET_SELECT_PRODUCT: "/api/selectProduct/:selectProductId",
} as const;

/** 선택 상품 생성 */
selectProductRouter.post(
  extractPath(
    SELECT_PRODUCT_ROUTER.CREATE_SELECT_PRODUCT,
    ROUTES_INDEX.SELECT_PRODUCT_API
  ),
  selectProductController.createSelectProduct
);

/** 선택 상품 수정 */
selectProductRouter.put(
  extractPath(
    SELECT_PRODUCT_ROUTER.UPDATE_SELECT_PRODUCT,
    ROUTES_INDEX.SELECT_PRODUCT_API
  ),
  selectProductController.updateSelectProduct
);

/** 선택 상품 삭제 */
selectProductRouter.delete(
  extractPath(
    SELECT_PRODUCT_ROUTER.DELETE_SELECT_PRODUCT,
    ROUTES_INDEX.SELECT_PRODUCT_API
  ),
  selectProductController.deleteSelectProduct
);

/** 선텍 상품 조회 */
selectProductRouter.get(
  extractPath(
    SELECT_PRODUCT_ROUTER.GET_SELECT_PRODUCTS,
    ROUTES_INDEX.SELECT_PRODUCT_API
  ),
  selectProductController.getSelectProducts
);

/** 선택 상품 상세 조회 */
selectProductRouter.get(
  extractPath(
    SELECT_PRODUCT_ROUTER.GET_SELECT_PRODUCT,
    ROUTES_INDEX.SELECT_PRODUCT_API
  ),
  selectProductController.getSelectProduct
);

export default selectProductRouter;
