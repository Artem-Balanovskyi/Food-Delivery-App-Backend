import { Order } from "../../orders/orders.schema";
export declare class CreateOrderDto {
    readonly _id: number;
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly orders: Order[];
}
