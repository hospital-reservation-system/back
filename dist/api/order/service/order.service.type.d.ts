export interface OrderService {
    createOrder(order: Omit<IOrder, "id" | "total_price" | "hospitalId">): Promise<IOrder>;
    getOrders(): Promise<IOrder[]>;
    getOrder(user_tell: string, email: string): Promise<IOrder[]>;
    updateOrder(orderId: string, params: Omit<IOrder, "id">): Promise<void>;
    deleteOrder(orderId: string): Promise<void>;
}
