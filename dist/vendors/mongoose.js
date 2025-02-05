"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose = Object.assign(mongoose_1.default, {
    generateCustomId(prefix) {
        const uniqueId = new mongoose.Types.ObjectId().toString(); // 고유한 ObjectId를 문자열로 변환
        return `${prefix}_${uniqueId}`;
    },
});
exports.default = mongoose;
//# sourceMappingURL=mongoose.js.map