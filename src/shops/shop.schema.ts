import { Schema, SchemaFactory } from "@nestjs/mongoose"
import {prop} from '@typegoose/typegoose';
@Schema()
export class Shop {
    @prop({required: true})
    readonly shopName: string;

    @prop({required: true})
    readonly logo: string;

    @prop({required: true})
    readonly isActive: boolean;

    @prop({type: () => [MenuItem]})
    readonly menu: MenuItem[]
}
export const ShopSchema = SchemaFactory.createForClass(Shop);

export class MenuItem {
    @prop({required: true})
    readonly itemName: string;

    @prop({required: true})
    readonly price: number;

    @prop({required: true})
    readonly image: string;

    @prop({required: true})
    readonly quantity: number
}