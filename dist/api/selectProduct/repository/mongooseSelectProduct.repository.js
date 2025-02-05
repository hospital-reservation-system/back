"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseSelectProductRepository = void 0;
const selectProduct_schema_1 = require("@/api/selectProduct/model/selectProduct.schema");
class MongooseSelectProductRepository {
    async save(selectProduct) {
        const newSelectProduct = new selectProduct_schema_1.MongooseSelectProduct(selectProduct);
        await newSelectProduct.save();
        return newSelectProduct;
    }
    async findAll() {
        const values = await selectProduct_schema_1.MongooseSelectProduct.find().exec();
        return values;
    }
    async findById(selectProductId) {
        return selectProduct_schema_1.MongooseSelectProduct.findById(selectProductId);
    }
    async update(selectProductId, updateSelectProductInfo) {
        await selectProduct_schema_1.MongooseSelectProduct.findByIdAndUpdate(selectProductId, updateSelectProductInfo);
        return;
    }
    async delete(selectProductId) {
        await selectProduct_schema_1.MongooseSelectProduct.findByIdAndDelete(selectProductId);
        return;
    }
}
exports.MongooseSelectProductRepository = MongooseSelectProductRepository;
//# sourceMappingURL=mongooseSelectProduct.repository.js.map