"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServiceImpl = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const mongodb_1 = require("mongodb");
class ProductServiceImpl {
    _productRepository;
    _adminRepository;
    constructor(productRepository, adminRepository) {
        this._productRepository = productRepository;
        this._adminRepository = adminRepository;
    }
    async createProduct(hospitalId, product) {
        const findAdmin = await this._adminRepository.findById(hospitalId);
        if (!findAdmin) {
            throw new http_exception_1.default(409, "존재하지 않는 병원입니다.");
        }
        const newProduct = {
            name: product.name,
            price: product.price,
            description: product.description,
            selective: product.selective,
            hospitalId: hospitalId,
        };
        const savedProduct = await this._productRepository.save(hospitalId, newProduct);
        const updateProducts = findAdmin.products
            ? findAdmin.products.concat(savedProduct)
            : [savedProduct];
        await this._adminRepository.update(hospitalId, { products: updateProducts });
        return newProduct;
    }
    async getProducts() {
        const products = await this._productRepository.findAll();
        return products;
    }
    async getProductById(productId) {
        const product = await this._productRepository.findById(productId);
        if (!product) {
            throw new http_exception_1.default(404, "상품을 찾을 수 없습니다.");
        }
        return product;
    }
    async updateProduct(productId, product) {
        const productToUpdate = {
            ...product,
            description: product.description || "",
        };
        await this._productRepository.update(productId, productToUpdate);
        return;
    }
    async deleteProduct(hospitalId, productId) {
        const findAdmin = await this._adminRepository.findById(hospitalId);
        if (!findAdmin) {
            throw new http_exception_1.default(409, "존재하지 않는 병원입니다.");
        }
        const product = await this._productRepository.findById(productId);
        if (!product) {
            throw new http_exception_1.default(404, "상품을 찾을 수 없습니다.");
        }
        const updatedProducts = (findAdmin.products || []).filter((p) => {
            return new mongodb_1.ObjectId(p.id).toString() !== new mongodb_1.ObjectId(productId).toString();
        });
        await this._adminRepository.update(hospitalId, { products: updatedProducts });
        await this._productRepository.delete(productId);
    }
}
exports.ProductServiceImpl = ProductServiceImpl;
//# sourceMappingURL=product.service.js.map