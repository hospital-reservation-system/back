import { SelectProductRepository } from '@/api/selectProduct/repository/selectProduct.repository';
import { AdminRepository } from '@/api/admin/repository/admin.repository';
import { SelectProductService } from '@/api/selectProduct/service/selectProduct.service.type';
export declare class SelectProductServiceImpl implements SelectProductService {
    private readonly _selectProductRepository;
    private readonly _adminRepository;
    constructor(_selectProductRepository: SelectProductRepository, _adminRepository: AdminRepository);
    createSelectProduct(product: Omit<ISelectProduct, "id">): Promise<ISelectProduct>;
    getSelectProducts(): Promise<ISelectProduct[]>;
    getSelectProduct(selectProductId: string): Promise<ISelectProduct | null>;
    updateSelectProduct(selectProductId: string, params: Partial<Omit<ISelectProduct, "_id">>): Promise<void>;
    deleteSelectProduct(selectProductId: string): Promise<void>;
}
