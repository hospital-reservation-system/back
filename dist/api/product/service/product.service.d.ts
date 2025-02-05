import { ProductRepository } from "../repository/product.repository";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { ProductService } from "./product.service.type";
export declare class ProductServiceImpl implements ProductService {
    private readonly _productRepository;
    private readonly _adminRepository;
    constructor(productRepository: ProductRepository, adminRepository: AdminRepository);
    createProduct(hospitalId: string, product: Omit<IProduct, "id">): Promise<IProduct>;
    getProducts(): Promise<IProduct[]>;
    getProductById(productId: string): Promise<IProduct>;
    updateProduct(productId: string, product: IProduct): Promise<void>;
    deleteProduct(hospitalId: string, productId: string): Promise<void>;
}
