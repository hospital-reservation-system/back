"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseSelectProduct = void 0;
const mongoose_1 = __importDefault(require("@/vendors/mongoose"));
const selectProductSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
exports.MongooseSelectProduct = mongoose_1.default.model("SelectProduct", selectProductSchema);
//# sourceMappingURL=selectProduct.schema.js.map