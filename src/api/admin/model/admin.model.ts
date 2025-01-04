export class Admin implements IAdmin {
  id: string;
  email: string;
  password: string;
  name: string;
  role?: role;
  // hospitals?: IHospital[];
  // orders?: IOrder[];
  selectProducts?: ISelectProduct[];

  constructor(params: IAdmin) {
    this.id = params.id;
    this.email = params.email;
    this.password = params.password;
    this.name = params.name;
    this.role = params.role ?? "admin";
    // this.hospitals = params.hospitals;
    // this.orders = params.orders;
    this.selectProducts = params.selectProducts;
  }
}