export interface OrderRepository {
    save(order: Omit<IOrder, "id">): Promise<IOrder>;
    findAll(): Promise<IOrder[]>;
    findById(orderId: string): Promise<IOrder | null>;
    findByTell(user_tell: string): Promise<IOrder[]>;
    findByEmail(email: string): Promise<IOrder[]>;
    update(orderId: string, updateOrderInfo: Omit<IOrder, "id">): Promise<void>;
    delete(orderId: string): Promise<void>;
}
