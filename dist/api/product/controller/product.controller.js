"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductController {
    _productService;
    constructor(_productService) {
        this._productService = _productService;
        this.createProduct = this.createProduct.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.getProduct = this.getProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }
    async createProduct(req, res, next) {
        try {
            const hospitalId = req.admin.id;
            // console.log(hospitalId)
            const { name, price, description, selective } = req.body;
            const newProduct = await this._productService.createProduct(hospitalId, {
                name,
                price,
                description,
                selective,
            });
            res
                .status(201)
                .json({ data: newProduct, message: "상품이 생성되었습니다." });
        }
        catch (err) {
            next(err);
        }
    }
    async getProducts(req, res, next) {
        try {
            const products = await this._productService.getProducts();
            res.status(200).json({ data: products, message: "상품 목록입니다." });
        }
        catch (err) {
            next(err);
        }
    }
    async getProduct(req, res, next) {
        try {
            const { productId } = req.params;
            const product = await this._productService.getProductById(productId);
            res.status(200).json({ data: product, message: "상품입니다." });
        }
        catch (err) {
            next(err);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const { productId } = req.params;
            console.log("controller", productId);
            const { name, price, description, selective } = req.body;
            await this._productService.updateProduct(productId, {
                name,
                price,
                description,
                selective,
            });
            res.status(200).json({ message: "상품이 수정되었습니다." });
        }
        catch (err) {
            next(err);
        }
    }
    async deleteProduct(req, res, next) {
        try {
            const hospitalId = req.admin.id;
            const { productId } = req.params;
            await this._productService.deleteProduct(hospitalId, productId);
            res.status(200).json({ message: "상품이 삭제되었습니다." });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map