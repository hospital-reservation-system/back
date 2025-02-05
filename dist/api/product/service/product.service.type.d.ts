export interface ProductService {
    createProduct(hospitalId: string, product: Omit<IProduct, "id" | "hospitalId">): Promise<IProduct>;
    getProducts(): Promise<IProduct[]>;
    getProductById(productId: string): Promise<IProduct>;
    updateProduct(productId: string, product: Omit<IProduct, "id" | "hospitalId">): Promise<void>;
    deleteProduct(hospitalId: string, productId: string): Promise<void>;
}
