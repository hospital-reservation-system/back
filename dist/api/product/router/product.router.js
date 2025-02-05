"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = __importDefault(require("../controller/product.controller"));
const path_util_1 = require("@/utils/path.util");
const api_1 = require("@/api");
const product_service_1 = require("../service/product.service");
const mongooseProduct_repository_1 = require("../repository/mongooseProduct.repository");
const mongooseAdmin_repository_1 = require("@/api/admin/repository/mongooseAdmin.repository");
const authAdmin_middleware_1 = require("@/api/common/middleware/authAdmin.middleware");
const authRole_middleware_1 = require("@/api/common/middleware/authRole.middleware");
const prodcutRouter = express_1.default.Router();
const productController = new product_controller_1.default(new product_service_1.ProductServiceImpl(new mongooseProduct_repository_1.MongooseProductRepository(), new mongooseAdmin_repository_1.MongooseAdminRepository()));
const PRODUCT_ROUTES = {
    GET_PRODUCTS: "/api/product",
    GET_PRODUCT: "/api/product/:productId",
    CREATE_PRODUCT: "/api/product",
    UPDATE_PRODUCT: "/api/product/:productId",
    DELETE_PRODUCT: "/api/product/:productId",
};
prodcutRouter.get((0, path_util_1.extractPath)(PRODUCT_ROUTES.GET_PRODUCTS, api_1.ROUTES_INDEX.PRODUCT_API), 
// authRoleMiddleware(["admin", "hospital"]),
productController.getProducts);
prodcutRouter.get((0, path_util_1.extractPath)(PRODUCT_ROUTES.GET_PRODUCT, api_1.ROUTES_INDEX.PRODUCT_API), 
// authRoleMiddleware(["admin", "hospital"]),
productController.getProduct);
prodcutRouter.post((0, path_util_1.extractPath)(PRODUCT_ROUTES.CREATE_PRODUCT, api_1.ROUTES_INDEX.PRODUCT_API), (0, authRole_middleware_1.authRoleMiddleware)(["admin", "hospital"]), authAdmin_middleware_1.authAdminMiddleware, productController.createProduct);
prodcutRouter.put((0, path_util_1.extractPath)(PRODUCT_ROUTES.UPDATE_PRODUCT, api_1.ROUTES_INDEX.PRODUCT_API), (0, authRole_middleware_1.authRoleMiddleware)(["admin", "hospital"]), authAdmin_middleware_1.authAdminMiddleware, productController.updateProduct);
prodcutRouter.delete((0, path_util_1.extractPath)(PRODUCT_ROUTES.DELETE_PRODUCT, api_1.ROUTES_INDEX.PRODUCT_API), (0, authRole_middleware_1.authRoleMiddleware)(["admin", "hospital"]), authAdmin_middleware_1.authAdminMiddleware, productController.deleteProduct);
exports.default = prodcutRouter;
//# sourceMappingURL=product.router.js.map