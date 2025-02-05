"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// mongodb+srv://[]:BUFfDus9RCF9S3ff@mongo-study.jdr95.mongodb.net/
const mongodbUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}`;
exports.db = mongoose_1.default.createConnection(mongodbUri).asPromise();
(async () => {
    try {
        await mongoose_1.default.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}`, {
            dbName: 'hospital',
        });
        console.log("Connected DB");
    }
    catch (error) {
        console.error(error);
    }
})();
//# sourceMappingURL=mongoose.js.map