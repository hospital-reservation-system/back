"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const selectProduct_controller_1 = __importDefault(require("@/api/selectProduct/controller/selectProduct.controller"));
const mongooseSelectProduct_repository_1 = require("@/api/selectProduct/repository/mongooseSelectProduct.repository");
const mongooseAdmin_repository_1 = require("@/api/admin/repository/mongooseAdmin.repository");
const selectProduct_service_1 = require("@/api/selectProduct/service/selectProduct.service");
const path_util_1 = require("@/utils/path.util");
const api_1 = require("@/api");
const selectProductRouter = express_1.default.Router();
const selectProductController = new selectProduct_controller_1.default(new selectProduct_service_1.SelectProductServiceImpl(new mongooseSelectProduct_repository_1.MongooseSelectProductRepository(), new mongooseAdmin_repository_1.MongooseAdminRepository()));
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
};
/** 선택 상품 생성 */
selectProductRouter.post((0, path_util_1.extractPath)(SELECT_PRODUCT_ROUTER.CREATE_SELECT_PRODUCT, api_1.ROUTES_INDEX.SELECT_PRODUCT_API), selectProductController.createSelectProduct);
/** 선택 상품 수정 */
selectProductRouter.put((0, path_util_1.extractPath)(SELECT_PRODUCT_ROUTER.UPDATE_SELECT_PRODUCT, api_1.ROUTES_INDEX.SELECT_PRODUCT_API), selectProductController.updateSelectProduct);
/** 선택 상품 삭제 */
selectProductRouter.delete((0, path_util_1.extractPath)(SELECT_PRODUCT_ROUTER.DELETE_SELECT_PRODUCT, api_1.ROUTES_INDEX.SELECT_PRODUCT_API), selectProductController.deleteSelectProduct);
/** 선텍 상품 조회 */
selectProductRouter.get((0, path_util_1.extractPath)(SELECT_PRODUCT_ROUTER.GET_SELECT_PRODUCTS, api_1.ROUTES_INDEX.SELECT_PRODUCT_API), selectProductController.getSelectProducts);
/** 선택 상품 상세 조회 */
selectProductRouter.get((0, path_util_1.extractPath)(SELECT_PRODUCT_ROUTER.GET_SELECT_PRODUCT, api_1.ROUTES_INDEX.SELECT_PRODUCT_API), selectProductController.getSelectProduct);
exports.default = selectProductRouter;
//# sourceMappingURL=selectProduct.router.js.map