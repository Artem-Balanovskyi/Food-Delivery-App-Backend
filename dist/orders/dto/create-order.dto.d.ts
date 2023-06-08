import { MenuItem } from "../../shops/shop.schema";
export declare class CreateOrderDto {
    readonly _id: number;
    readonly shopName: string;
    readonly customerName: string;
    readonly orderItems: MenuItem[];
    readonly totalPrice: number;
    readonly date: string;
}
