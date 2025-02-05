"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderResponseDTO = void 0;
// 예약 상세 조회 DTO
class GetOrderResponseDTO {
    orderId;
    user_name;
    user_tell;
    user_birth;
    user_address;
    user_gender;
    user_email;
    total_price;
    memo;
    reservation_date;
    reservation_time;
    status;
    // hospital: IHospital;
    // product: IProduct;
    // select_product?: ISelectProduct;
    constructor(order) {
        this.orderId = order.id;
        this.user_name = order.user_name;
        this.user_tell = order.user_tell;
        this.user_birth = order.user_birth;
        this.user_address = `${order.user_address.zipcode} ${order.user_address.basic} ${order.user_address.detail}`;
        this.user_gender = order.user_gender;
        this.user_email = order.user_email;
        this.total_price = order.total_price;
        this.memo = order.memo;
        this.reservation_date = order.reservation_date;
        this.reservation_time = order.reservation_time;
        this.status = order.status;
        // this.hospital = order.hospital;
        // this.product = order.product;
        // this.select_product = order.select_product;
    }
}
exports.GetOrderResponseDTO = GetOrderResponseDTO;
//# sourceMappingURL=getOrderResponse.dto.js.map