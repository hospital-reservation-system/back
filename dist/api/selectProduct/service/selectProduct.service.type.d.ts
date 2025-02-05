export interface SelectProductService {
    createSelectProduct(params: Omit<ISelectProduct, "id">): Promise<ISelectProduct>;
    getSelectProducts(): Promise<ISelectProduct[]>;
    getSelectProduct(selectProductId: string): Promise<ISelectProduct | null>;
    updateSelectProduct(selectProductId: string, params: Partial<Omit<ISelectProduct, "id">>): Promise<void>;
    deleteSelectProduct(selectProductId: string): Promise<void>;
}
