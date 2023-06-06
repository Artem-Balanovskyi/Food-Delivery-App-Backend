import {IsBoolean, IsNotEmpty, IsString} from "class-validator";
import {MenuItem} from "../shops.model";

export class CreateShopDto {

    @IsNotEmpty({ message: 'The shop`s name can not be empty.' })
    @IsString({ message: ' The shop`s name should be a string.' })
    readonly shopName: string;

    @IsNotEmpty({ message: 'The shop`s logo can not be empty.' })
    @IsString({ message: ' The shop`s logo should be a string.' })
    readonly logo: string;

    @IsNotEmpty({message: 'The shop`s isActive can not be empty.' })
    @IsBoolean({message: 'The shop`s isActive should be a boolean type.' })
    readonly isActive: boolean

    @IsNotEmpty({message: 'The shop`s menu can not be empty.' })
    readonly menu: MenuItem[]
}
