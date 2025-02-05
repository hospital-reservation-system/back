"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSelectProductsResponseDTO = void 0;
// 선택 상품 목록 조회 DTO
class GetSelectProductsResponseDTO {
    selectProductId;
    name;
    price;
    constructor(selectProduct) {
        this.selectProductId = selectProduct.id;
        this.name = selectProduct.name;
        this.price = selectProduct.price;
    }
}
exports.GetSelectProductsResponseDTO = GetSelectProductsResponseDTO;
//# sourceMappingURL=getSelectProductsResponse.dto.js.map