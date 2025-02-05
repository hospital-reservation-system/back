"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    id;
    name;
    price;
    description;
    selective;
    hospitalId;
    constructor(params) {
        this.id = params.id;
        this.name = params.name;
        this.price = params.price;
        this.description = params.description;
        this.selective = params.selective;
        this.hospitalId = params.hospitalId;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.model.js.map