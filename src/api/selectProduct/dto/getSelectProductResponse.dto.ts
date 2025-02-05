// 선택 상품 상세 조회 DTO
export class GetSelectProductResponseDTO {
  selectProductId?: string;
  name: string;
  price: number;
  description: string;

  constructor(selectProduct: ISelectProduct) {
    this.selectProductId = selectProduct.id;
    this.name = selectProduct.name;
    this.price = selectProduct.price;
    this.description = selectProduct.description;
  }
}
