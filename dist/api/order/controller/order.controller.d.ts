import { Request, Response, NextFunction } from "express";
import { OrderService } from "@/api/order/service/order.service.type";
export default class OrderController {
    private readonly _orderService;
    constructor(_orderService: OrderService);
    /** 주문 생성 */
    createOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 주문 수정 */
    updateOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 주문 삭제 */
    deleteOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 주문 조회 */
    getOrders(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 주문 상세 조회 */
    getOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
}
