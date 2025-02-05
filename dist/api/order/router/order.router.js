"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = __importDefault(require("@/api/order/controller/order.controller"));
const mongooseOrder_repository_1 = require("@/api/order/repository/mongooseOrder.repository");
const mongooseAdmin_repository_1 = require("@/api/admin/repository/mongooseAdmin.repository");
const mongooseProduct_repository_1 = require("@/api/product/repository/mongooseProduct.repository");
const mongooseSelectProduct_repository_1 = require("@/api/selectProduct/repository/mongooseSelectProduct.repository");
const order_service_1 = require("@/api/order/service/order.service");
const path_util_1 = require("@/utils/path.util");
const api_1 = require("@/api");
const orderRouter = express_1.default.Router();
const orderController = new order_controller_1.default(new order_service_1.OrderServiceImpl(new mongooseOrder_repository_1.MongooseOrderRepository(), new mongooseAdmin_repository_1.MongooseAdminRepository(), new mongooseProduct_repository_1.MongooseProductRepository(), new mongooseSelectProduct_repository_1.MongooseSelectProductRepository()));
const ORDER_ROUTER = {
    /** 주문 생성 */
    CREATE_ORDER: "/api/order",
    /** 주문 수정 */
    UPDATE_ORDER: "/api/order/:orderId",
    /** 주문 삭제 */
    DELETE_ORDER: "/api/order/:orderId",
    /** 주문 조회 */
    GET_ORDERS: "/api/order",
    /** 주문 상세 조회 */
    // GET_ORDER: "/api/order/:orderId",
    GET_ORDER: "/api/order/detail",
};
/** 주문 생성 */
orderRouter.post((0, path_util_1.extractPath)(ORDER_ROUTER.CREATE_ORDER, api_1.ROUTES_INDEX.ORDER_API), orderController.createOrder);
/** 주문 수정 */
orderRouter.put((0, path_util_1.extractPath)(ORDER_ROUTER.UPDATE_ORDER, api_1.ROUTES_INDEX.ORDER_API), orderController.updateOrder);
/** 주문 삭제 */
orderRouter.delete((0, path_util_1.extractPath)(ORDER_ROUTER.DELETE_ORDER, api_1.ROUTES_INDEX.ORDER_API), orderController.deleteOrder);
/** 주문 조회 */
orderRouter.get((0, path_util_1.extractPath)(ORDER_ROUTER.GET_ORDERS, api_1.ROUTES_INDEX.ORDER_API), orderController.getOrders);
/** 주문 상세 조회 */
orderRouter.get((0, path_util_1.extractPath)(ORDER_ROUTER.GET_ORDER, api_1.ROUTES_INDEX.ORDER_API), orderController.getOrder);
exports.default = orderRouter;
//# sourceMappingURL=order.router.js.map