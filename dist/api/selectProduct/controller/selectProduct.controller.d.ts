import { Request, Response, NextFunction } from "express";
import { SelectProductService } from "@/api/selectProduct/service/selectProduct.service.type";
export default class SelectProductController {
    private readonly _selectProductService;
    constructor(_selectProductService: SelectProductService);
    /** 선택 상품 생성 */
    createSelectProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 선택 상품 수정 */
    updateSelectProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 선택 상품 삭제 */
    deleteSelectProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 선택 상품 조회 */
    getSelectProducts(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 선택 상품 상세 조회 */
    getSelectProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
}
