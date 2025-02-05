// 예약 상세 조회 DTO
export class GetOrderResponseDTO {
  orderId: string;
  user_name: string;
  user_tell: string;
  user_birth: string;
  user_address: string;
  user_gender: string;
  user_email: string;
  total_price: number;
  memo?: string;
  reservation_date: Date;
  reservation_time: string;
  status?: "pending" | "success" | "cancel";
  // hospital: IHospital;
  // product: IProduct;
  // select_product?: ISelectProduct;

  constructor(order: IOrder) {
    this.orderId = order.id;
    this.user_name = order.user_name;
    this.user_tell = order.user_tell;
    this.user_birth = order.user_birth;
    this.user_address = `${order.user_address.zipcode} ${order.user_address.basic} ${order.user_address.detail}`;
    this.user_gender = order.user_gender;
    this.user_email = order.user_email;
    this.total_price = order.total_price;
    this.memo = order.memo;
    this.reservation_date = order.reservation_date;
    this.reservation_time = order.reservation_time;
    this.status = order.status;
    // this.hospital = order.hospital;
    // this.product = order.product;
    // this.select_product = order.select_product;
  }
}
