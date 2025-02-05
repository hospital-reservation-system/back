"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseProductRepository = void 0;
const product_schema_1 = require("../models/product.schema");
const admin_schema_1 = require("@/api/admin/model/admin.schema");
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
class MongooseProductRepository {
    async save(hospitalId, params) {
        const admin = await admin_schema_1.MongooseAdmin.findById(hospitalId);
        if (!admin) {
            throw new http_exception_1.default(404, "병원을 찾을 수 없습니다.");
        }
        const newProduct = await new product_schema_1.MongooseProduct({
            ...params,
            hospitalId: hospitalId,
        });
        const product = newProduct.save();
        return product;
    }
    async findAll() {
        const products = await product_schema_1.MongooseProduct.find()
            .populate({
            path: "selective",
            select: "name price",
        })
            .populate({
            path: "hospitalId",
            select: "_id hospitalName address",
        })
            .exec();
        if (!products)
            throw new http_exception_1.default(404, "상품을 찾을 수 없습니다.");
        return products;
    }
    async findById(productId) {
        const product = product_schema_1.MongooseProduct.findById(productId)
            .populate({
            path: "selective",
            select: "name price",
        })
            .populate({
            path: "hospitalId",
            select: "hospitalName address",
        })
            .exec();
        if (!product)
            throw new http_exception_1.default(404, "상품을 찾을 수 없습니다.");
        return product;
    }
    async update(productId, params) {
        const findProduct = await product_schema_1.MongooseProduct.findById(productId);
        if (!findProduct) {
            throw new http_exception_1.default(404, "상품을 찾을 수 없습니다.");
        }
        await product_schema_1.MongooseProduct.findByIdAndUpdate(productId, params);
        return;
    }
    async delete(productId) {
        await product_schema_1.MongooseProduct.deleteOne({ _id: productId });
        return;
    }
}
exports.MongooseProductRepository = MongooseProductRepository;
//# sourceMappingURL=mongooseProduct.repository.js.map