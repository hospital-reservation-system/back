"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseProduct = void 0;
// import mongoose, { Schema, Document } from "mongoose";
const mongoose_1 = __importDefault(require("@/vendors/mongoose"));
const uuid_1 = require("uuid");
const ProductSchema = new mongoose_1.default.Schema({
    id: { type: String, unique: true, default: uuid_1.v4 },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    // selective: { type: [String] },
    selective: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "SelectProduct" }],
    // hospitalId: { type: String }
    hospitalId: { type: mongoose_1.default.Schema.Types.Mixed, ref: "Admin" },
}, {
    timestamps: true,
});
exports.MongooseProduct = mongoose_1.default.model("Product", ProductSchema);
//# sourceMappingURL=product.schema.js.map