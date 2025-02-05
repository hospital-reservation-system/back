// 선택 상품 목록 조회 DTO
export class GetSelectProductsResponseDTO {
  selectProductId?: string;
  name: string;
  price: number;

  constructor(selectProduct: ISelectProduct) {
    this.selectProductId = selectProduct.id;
    this.name = selectProduct.name;
    this.price = selectProduct.price;
  }
}
