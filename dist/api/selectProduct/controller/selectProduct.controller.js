"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SelectProductController {
    _selectProductService;
    constructor(_selectProductService) {
        this._selectProductService = _selectProductService;
        this.createSelectProduct = this.createSelectProduct.bind(this);
        this.updateSelectProduct = this.updateSelectProduct.bind(this);
        this.deleteSelectProduct = this.deleteSelectProduct.bind(this);
        this.getSelectProducts = this.getSelectProducts.bind(this);
        this.getSelectProduct = this.getSelectProduct.bind(this);
    }
    /** 선택 상품 생성 */
    async createSelectProduct(req, res, next) {
        try {
            const selectProduct = await this._selectProductService.createSelectProduct({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
            });
            res.status(200).json(selectProduct);
        }
        catch (error) {
            res.status(409).json({ message: "선택 상품 생성 실패" });
        }
    }
    /** 선택 상품 수정 */
    async updateSelectProduct(req, res, next) {
        try {
            const updateData = { ...req.body };
            const selectProduct = await this._selectProductService.updateSelectProduct(req.params.selectProductId, updateData);
            res.status(200).json({
                message: "주문 수정 성공",
                data: selectProduct,
            });
        }
        catch (error) {
            res.status(409).json({ message: "선택 상품 수정 실패" });
        }
    }
    /** 선택 상품 삭제 */
    async deleteSelectProduct(req, res, next) {
        try {
            const { selectProductId } = req.params;
            await this._selectProductService.deleteSelectProduct(selectProductId);
            res.status(200).json({ message: "선택 상품 삭제 성공" });
        }
        catch (error) {
            res.status(404).json({ message: "선택 상품 삭제 실패" });
        }
    }
    /** 선택 상품 조회 */
    async getSelectProducts(req, res, next) {
        try {
            const selectProducts = await this._selectProductService.getSelectProducts();
            res.status(200).json({
                message: "선택 상품 조회 성공",
                data: selectProducts,
            });
        }
        catch (error) {
            res.status(400).json({ message: "선택 상품 목록 조회 실패" });
            next(error);
        }
    }
    /** 선택 상품 상세 조회 */
    async getSelectProduct(req, res, next) {
        try {
            const { selectProductId } = req.params;
            const selectProduct = await this._selectProductService.getSelectProduct(selectProductId);
            res.status(200).json({
                message: "선택 상품 조회 성공",
                data: selectProduct,
            });
        }
        catch (error) {
            res.status(404).json({ message: "선택 상품 조회 실패" });
        }
    }
}
exports.default = SelectProductController;
//# sourceMappingURL=selectProduct.controller.js.map