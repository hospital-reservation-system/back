"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectProductServiceImpl = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const mongodb_1 = require("mongodb");
// import { SelectProductResponseDTO } from '@/api/selectProduct/dto/selectProductResponse.dto';
// import { GetSelectProductResponseDTO } from '@/api/selectProduct/dto/getSelectProductResponse.dto';
// import { GetSelectProductsResponseDTO } from '@/api/selectProduct/dto/getSelectProductsResponse.dto';
class SelectProductServiceImpl {
    _selectProductRepository;
    _adminRepository;
    constructor(_selectProductRepository, _adminRepository) {
        this._selectProductRepository = _selectProductRepository;
        this._adminRepository = _adminRepository;
    }
    async createSelectProduct(product) {
        const newProduct = {
            name: product.name,
            price: product.price,
            description: product.description,
        };
        const savedProduct = await this._selectProductRepository.save(newProduct);
        const allAdmins = await this._adminRepository.findAll();
        await Promise.all(allAdmins.map(async (admin) => {
            const updatedSelectProducts = admin.selectProducts
                ? admin.selectProducts.concat(savedProduct)
                : [savedProduct];
            await this._adminRepository.update(admin.id, { selectProducts: updatedSelectProducts });
        }));
        return savedProduct;
    }
    async getSelectProducts() {
        const selectProducts = await this._selectProductRepository.findAll();
        // const newList = await Promise.all(
        //     selectProducts.map((selectProduct)=>new GetSelectProductsResponseDTO(selectProduct))
        // );
        return selectProducts;
    }
    async getSelectProduct(selectProductId) {
        const selectProduct = await this._selectProductRepository.findById(selectProductId);
        if (!selectProduct) {
            throw new http_exception_1.default(404, "선택 상품 정보 조회 실패");
        }
        // const selectProductList = await new GetSelectProductResponseDTO(selectProduct);
        return selectProduct;
    }
    async updateSelectProduct(selectProductId, params) {
        const findSelectProduct = await this._selectProductRepository.findById(selectProductId);
        if (!findSelectProduct) {
            throw new http_exception_1.default(404, "선택 상품 정보 조회 실패");
        }
        await this._selectProductRepository.update(selectProductId, params);
        return;
    }
    async deleteSelectProduct(selectProductId) {
        // 1. 선택 상품 삭제
        await this._selectProductRepository.delete(selectProductId);
        // 2. 모든 관리자 가져오기
        const allAdmins = await this._adminRepository.findAll();
        // 3. 모든 관리자에서 선택 상품 목록 업데이트
        await Promise.all(allAdmins.map(async (admin) => {
            const updatedSelectProducts = (admin.selectProducts || []).filter((p) => {
                return new mongodb_1.ObjectId(p.id).toString() !== new mongodb_1.ObjectId(selectProductId).toString();
            });
            // 관리자의 선택 상품 목록 업데이트
            await this._adminRepository.update(admin.id, { selectProducts: updatedSelectProducts });
        }));
    }
}
exports.SelectProductServiceImpl = SelectProductServiceImpl;
//# sourceMappingURL=selectProduct.service.js.map