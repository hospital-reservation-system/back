export default class SelectProduct implements ISelectProduct {
    id?: string;
    name: string;
    price: number;
    description: string;
    constructor(params: ISelectProduct);
}
