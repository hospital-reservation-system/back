export interface SelectProductRepository {
    save(selectProduct: Omit<ISelectProduct, "id">): Promise<ISelectProduct>;
    findAll(): Promise<ISelectProduct[]>;
    findById(selectProductId: string): Promise<ISelectProduct | null>;
    update(selectProductId: string, updateSelectProductInfo: Partial<ISelectProduct>): Promise<void>;
    delete(selectProductId: string): Promise<void>;
}
