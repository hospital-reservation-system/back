export interface ProductRepository {
    save(hospitalId: string, product: Omit<IProduct, "id">): Promise<IProduct>;
    findAll(): Promise<IProduct[]>;
    findById(productId: string): Promise<IProduct | null>;
    update(productId: string, params: Omit<IProduct, "id">): Promise<void>;
    delete(productId: string): Promise<void>;
}
