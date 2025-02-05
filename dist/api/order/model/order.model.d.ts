export default class Order implements IOrder {
    id: string;
    user_name: string;
    user_tell: string;
    user_birth: string;
    user_address: {
        zipcode: string;
        basic: string;
        detail: string;
    };
    user_gender: string;
    user_email: string;
    memo?: string;
    reservation_date: Date;
    reservation_time: string;
    status?: "pending" | "success" | "cancel";
    total_price: number;
    productId: string;
    hospitalId: string;
    select_product?: string[];
    constructor(params: IOrder);
}
