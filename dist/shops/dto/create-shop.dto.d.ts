import { MenuItem } from "../shop.schema";
export declare class CreateShopDto {
    readonly shopName: string;
    readonly logo: string;
    readonly isActive: boolean;
    readonly menu: MenuItem[];
}
