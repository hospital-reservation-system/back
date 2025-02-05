export declare class GetOrdersResponseDTO {
    orderId: string;
    user_name: string;
    user_tell: string;
    reservation_date: Date;
    reservation_time: string;
    status?: 'pending' | 'success' | 'cancel';
    constructor(order: IOrder);
}
