import express, { Router } from "express";
import OrderController from "@/api/order/controller/order.controller";
import { MongooseOrderRepository } from "@/api/order/repository/mongooseOrder.repository";
import { MongooseAdminRepository } from "@/api/admin/repository/mongooseAdmin.repository";
import { MongooseProductRepository } from "@/api/product/repository/mongooseProduct.repository";
import { MongooseSelectProductRepository } from "@/api/selectProduct/repository/mongooseSelectProduct.repository";
import { OrderServiceImpl } from "@/api/order/service/order.service";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/api";

const orderRouter: Router = express.Router();
const orderController = new OrderController(
  new OrderServiceImpl(
    new MongooseOrderRepository(),
    new MongooseAdminRepository(),
    new MongooseProductRepository(),
    new MongooseSelectProductRepository()
  )
);

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
} as const;

/** 주문 생성 */
orderRouter.post(
  extractPath(ORDER_ROUTER.CREATE_ORDER, ROUTES_INDEX.ORDER_API),
  orderController.createOrder
);

/** 주문 수정 */
orderRouter.put(
  extractPath(ORDER_ROUTER.UPDATE_ORDER, ROUTES_INDEX.ORDER_API),
  orderController.updateOrder
);

/** 주문 삭제 */
orderRouter.delete(
  extractPath(ORDER_ROUTER.DELETE_ORDER, ROUTES_INDEX.ORDER_API),
  orderController.deleteOrder
);

/** 주문 조회 */
orderRouter.get(
  extractPath(ORDER_ROUTER.GET_ORDERS, ROUTES_INDEX.ORDER_API),
  orderController.getOrders
);

/** 주문 상세 조회 */
orderRouter.get(
  extractPath(ORDER_ROUTER.GET_ORDER, ROUTES_INDEX.ORDER_API),
  orderController.getOrder
);

export default orderRouter;
