import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
export declare class ShopsController {
    private readonly shopsService;
    constructor(shopsService: ShopsService);
    create(response: any, createShopDto: CreateShopDto): Promise<any>;
    findAll(response: any): Promise<any>;
    findOne(response: any, id: string): Promise<any>;
    update(response: any, id: string, updateShopDto: UpdateShopDto): Promise<any>;
    remove(response: any, id: string): Promise<any>;
}
