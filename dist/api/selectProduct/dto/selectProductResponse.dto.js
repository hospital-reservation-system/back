"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectProductResponseDTO = void 0;
// 선택 상품 생성 DTO
class SelectProductResponseDTO {
    name;
    price;
    description;
    constructor(selectProduct) {
        this.name = selectProduct.name;
        this.price = selectProduct.price;
        this.description = selectProduct.description;
    }
}
exports.SelectProductResponseDTO = SelectProductResponseDTO;
//# sourceMappingURL=selectProductResponse.dto.js.map