"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseOrder = void 0;
const mongoose_1 = __importDefault(require("@/vendors/mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    user_name: { type: String, required: true },
    user_tell: { type: String, required: true },
    user_birth: { type: String, required: true },
    user_address: {
        zipcode: { type: String, required: true },
        basic: { type: String, required: true },
        detail: { type: String, required: true },
    },
    user_gender: { type: String, required: true },
    user_email: { type: String, required: true },
    memo: { type: String },
    reservation_date: { type: Date, required: true },
    reservation_time: { type: String, required: true },
    status: {
        type: String,
        enum: ["pending", "success", "cancel"],
        default: "pending",
    },
    total_price: { type: Number, required: true },
    // productId: { type: String },
    // hospitalId: { type: String },
    productId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Product" },
    hospitalId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Admin" },
    select_product: [
        { type: mongoose_1.default.Schema.Types.ObjectId, ref: "SelectProduct" },
    ],
    // hospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
exports.MongooseOrder = mongoose_1.default.model("Order", orderSchema);
//# sourceMappingURL=order.schema.js.map