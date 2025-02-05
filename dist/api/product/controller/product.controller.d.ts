import { Request, Response, NextFunction } from "express";
import { ProductService } from "../service/product.service.type";
export default class ProductController {
    private readonly _productService;
    constructor(_productService: ProductService);
    createProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    getProducts(req: Request, res: Response, next: NextFunction): Promise<void>;
    getProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
}
