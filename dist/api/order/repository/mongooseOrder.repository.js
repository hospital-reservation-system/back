"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseOrderRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const order_schema_1 = require("@/api/order/model/order.schema");
class MongooseOrderRepository {
    async save(order) {
        const newOrder = new order_schema_1.MongooseOrder(order);
        await newOrder.save();
        return newOrder;
    }
    async findAll() {
        const values = await order_schema_1.MongooseOrder.find()
            .populate({
            path: "productId",
            select: "name price",
        })
            .populate({
            path: "hospitalId",
            select: "hospitalName",
        })
            .populate({
            path: "select_product",
            select: "name price",
        })
            .exec();
        return values;
    }
    async findById(orderId) {
        const order = order_schema_1.MongooseOrder.findById(orderId)
            .populate({
            path: "productId",
            select: "name price",
        })
            .populate({
            path: "hospitalId",
            select: "hospitalName",
        })
            .populate({
            path: "select_product",
            select: "name price",
        })
            .exec();
        return order;
    }
    async findByTell(user_tell) {
        const order = order_schema_1.MongooseOrder.find({ user_tell }).populate({
            path: "hospitalId",
            select: "id hospitalName",
        });
        return order;
    }
    async findByEmail(user_email) {
        const order = order_schema_1.MongooseOrder.find({ user_email });
        return order;
    }
    async update(orderId, updateOrderInfo) {
        const updateOrder = await order_schema_1.MongooseOrder.findByIdAndUpdate(orderId, updateOrderInfo);
        if (!updateOrder) {
            throw new http_exception_1.default(404, "주문을 찾을 수 없습니다.");
        }
        return;
    }
    async delete(orderId) {
        await order_schema_1.MongooseOrder.deleteOne({ _id: orderId });
        return;
    }
}
exports.MongooseOrderRepository = MongooseOrderRepository;
//# sourceMappingURL=mongooseOrder.repository.js.map