"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    id;
    email;
    password;
    hospitalName;
    role;
    hospital;
    products;
    orders;
    selectProducts;
    constructor(params) {
        this.id = params.id;
        this.email = params.email;
        this.password = params.password;
        this.hospitalName = params.hospitalName;
        this.role = params.role ?? "admin";
        this.hospital = params.hospital;
        this.products = params.products;
        this.orders = params.orders;
        this.selectProducts = params.selectProducts;
    }
}
exports.default = Admin;
//# sourceMappingURL=admin.model.js.map