"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseAdminRepository = void 0;
const admin_schema_1 = require("@/api/admin/model/admin.schema");
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
class MongooseAdminRepository {
    /** 회원가입(role = admin, hospital) */
    async save(admin) {
        const newAdmin = new admin_schema_1.MongooseAdmin(admin);
        await newAdmin.save();
        return newAdmin;
    }
    /** 관리자 전체 조회(role = admin) */
    async findAll() {
        const admins = await admin_schema_1.MongooseAdmin.find()
            .populate({
            path: "products",
            select: "name price description hospitalId",
        })
            .populate({
            path: "orders",
            select: "user_name user_tell memo productId hospitalId select_product",
        })
            .populate({
            path: "selectProducts",
            select: "name price description",
        })
            .exec();
        return admins;
    }
    /** 관리자 조회(role = admin) */
    async findById(id) {
        const admin = await admin_schema_1.MongooseAdmin.findById(id)
            .populate({
            path: "products",
            select: "name price description hospitalId",
        })
            .populate({
            path: "orders",
            select: "user_name user_tell memo productId hospitalId select_product",
        })
            .populate({
            path: "selectProducts",
            select: "name price description",
        })
            .exec();
        if (!admin) {
            throw new http_exception_1.default(404, "해당 관리자를 찾을 수 없습니다.");
        }
        return admin;
    }
    /** 관리자 수정(role = admin) */
    async update(id, updateAdminInfo) {
        // await MongooseAdmin.findByIdAndUpdate(id, updateAdminInfo, {
        //   new: true,
        // });
        await admin_schema_1.MongooseAdmin.findByIdAndUpdate(id, updateAdminInfo).exec();
        return;
    }
    /** 관리자 삭제(role = admin) */
    async delete(id) {
        await admin_schema_1.MongooseAdmin.deleteOne({ _id: id });
        return;
    }
    async findByEmail(email) {
        const findAdmin = await admin_schema_1.MongooseAdmin.findOne({ email });
        return findAdmin ?? null;
    }
}
exports.MongooseAdminRepository = MongooseAdminRepository;
//# sourceMappingURL=mongooseAdmin.repository.js.map