import { OrderRepository } from "@/api/order/repository/order.repository";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { ProductRepository } from "@/api/product/repository/product.repository";
import { SelectProductRepository } from "@/api/selectProduct/repository/selectProduct.repository";
import { OrderService } from "@/api/order/service/order.service.type";
export declare class OrderServiceImpl implements OrderService {
    private readonly _orderRepository;
    private readonly _adminRepository;
    private readonly _productRepository;
    private readonly _selectProductRepository;
    constructor(_orderRepository: OrderRepository, _adminRepository: AdminRepository, _productRepository: ProductRepository, _selectProductRepository: SelectProductRepository);
    createOrder(order: Omit<IOrder, "id" | "hospitalId">): Promise<IOrder>;
    getOrders(): Promise<IOrder[]>;
    getOrder(user_tell: string, email: string): Promise<IOrder[]>;
    updateOrder(orderId: string, params: Omit<IOrder, "id">): Promise<void>;
    deleteOrder(orderId: string): Promise<void>;
}
