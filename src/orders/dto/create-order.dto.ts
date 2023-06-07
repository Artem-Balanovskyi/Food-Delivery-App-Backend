import {IsBoolean, IsNotEmpty, IsString} from "class-validator";
import {MenuItem} from "../../shops/shop.schema";

export class CreateOrderDto {
    @IsNotEmpty({ message: 'The order`s id can not be empty.' })
    @IsString({ message: ' The order`s id should be a number.' })
    readonly _id: number;

    @IsNotEmpty({ message: 'The shop`s name can not be empty.' })
    @IsString({ message: ' The shop`s name should be a string.' })
    readonly shopName: string;

    @IsNotEmpty({ message: 'The customer`s name can not be empty.' })
    @IsString({ message: ' The customer`s name should be a string.' })
    readonly customerName: string;


    @IsNotEmpty({message: 'The order`s orders can not be empty.' })
    readonly orderItems: MenuItem[]

    @IsNotEmpty({message: 'The order`s address can not be empty.' })
    @IsBoolean({message: 'The order`s address should be a number.' })
    readonly totalPrice: number

    @IsNotEmpty({ message: 'The order`s date can not be empty.' })
    @IsString({ message: ' The order`s date should be a string.' })
    readonly date: string;
}
