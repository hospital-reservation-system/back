"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    id;
    user_name;
    user_tell;
    user_birth;
    user_address;
    user_gender;
    user_email;
    memo;
    reservation_date;
    reservation_time;
    status;
    total_price;
    productId;
    hospitalId;
    select_product;
    // hospital: IHospital;
    constructor(params) {
        this.id = params.id;
        this.user_name = params.user_name;
        this.user_tell = params.user_tell;
        this.user_birth = params.user_birth;
        this.user_address = params.user_address;
        this.user_gender = params.user_gender;
        this.user_email = params.user_email;
        this.memo = params.memo;
        this.reservation_date = params.reservation_date;
        this.reservation_time = params.reservation_time;
        this.status = params.status;
        this.total_price = params.total_price;
        this.productId = params.productId;
        this.hospitalId = params.hospitalId;
        this.select_product = params.select_product;
        // this.hospital = params.hospital;
    }
}
exports.default = Order;
//# sourceMappingURL=order.model.js.map