import {IsBoolean, IsEmail, IsNotEmpty, IsString} from "class-validator";
import {Order} from "../../orders/orders.schema";
export class CreateOrderDto {

    @IsNotEmpty({ message: 'The customer`s id can not be empty.' })
    @IsString({ message: ' The customer`s id should be a number.' })
    readonly _id: number;

    @IsNotEmpty({ message: 'The customer`s name can not be empty.' })
    @IsString({ message: ' The customer`s name should be a string.' })
    readonly name: string;

    @IsNotEmpty({ message: 'The customer`s email can not be empty.' })
    @IsEmail()
    readonly email: string;

    @IsNotEmpty({message: 'The customer`s phone can not be empty.' })
    @IsBoolean({message: 'The customer`s phone should be a string type.' })
    readonly phone: string

    @IsNotEmpty({message: 'The customer`s address can not be empty.' })
    @IsBoolean({message: 'The customer`s address should be a string type.' })
    readonly address: string

    @IsNotEmpty({message: 'The customer`s orders can not be empty.' })
    readonly orders: Order[]
}