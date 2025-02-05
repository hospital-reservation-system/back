"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrdersResponseDTO = void 0;
// 예약 목록 조회 DTO
class GetOrdersResponseDTO {
    orderId;
    user_name;
    user_tell;
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
        this.reservation_date = order.reservation_date;
        this.reservation_time = order.reservation_time;
        this.status = order.status;
        // this.hospital = order.hospital;
        // this.product = order.product;
        // this.select_product = order.select_product;
    }
}
exports.GetOrdersResponseDTO = GetOrdersResponseDTO;
//# sourceMappingURL=getOrdersResponse.dto.js.map