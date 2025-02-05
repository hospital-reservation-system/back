import { OrderRepository } from "@/api/order/repository/order.repository";
export declare class MongooseOrderRepository implements OrderRepository {
    save(order: Omit<IOrder, "id">): Promise<IOrder>;
    findAll(): Promise<IOrder[]>;
    findById(orderId: string): Promise<IOrder | null>;
    findByTell(user_tell: string): Promise<IOrder[]>;
    findByEmail(user_email: string): Promise<IOrder[]>;
    update(orderId: string, updateOrderInfo: Omit<IOrder, "id">): Promise<void>;
    delete(orderId: string): Promise<void>;
}
