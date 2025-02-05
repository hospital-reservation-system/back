export declare class GetOrderResponseDTO {
    orderId: string;
    user_name: string;
    user_tell: string;
    user_birth: string;
    user_address: string;
    user_gender: string;
    user_email: string;
    total_price: number;
    memo?: string;
    reservation_date: Date;
    reservation_time: string;
    status?: "pending" | "success" | "cancel";
    constructor(order: IOrder);
}
