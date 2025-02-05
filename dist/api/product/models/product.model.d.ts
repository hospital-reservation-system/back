export declare class Product implements IProduct {
    id?: string;
    name: string;
    price: number;
    description: string;
    selective?: string[];
    hospitalId: string;
    constructor(params: IProduct);
}
