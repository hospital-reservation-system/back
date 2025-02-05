"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSelectProductResponseDTO = void 0;
// 선택 상품 상세 조회 DTO
class GetSelectProductResponseDTO {
    selectProductId;
    name;
    price;
    description;
    constructor(selectProduct) {
        this.selectProductId = selectProduct.id;
        this.name = selectProduct.name;
        this.price = selectProduct.price;
        this.description = selectProduct.description;
    }
}
exports.GetSelectProductResponseDTO = GetSelectProductResponseDTO;
//# sourceMappingURL=getSelectProductResponse.dto.js.map