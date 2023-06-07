import {prop} from "@typegoose/typegoose";
import {Schema, SchemaFactory} from "@nestjs/mongoose";
import {MenuItem} from "../shops/shop.schema";

@Schema()
export class Order {

    @prop({required: true})
    readonly _id: number;

    @prop({required: true})
    readonly shopName: string;

    @prop({required: true})
    readonly customerName: string;

    @prop({type: () => [MenuItem]})
    readonly orderItems: MenuItem[]

    @prop({required: true})
    readonly totalPrice: number

    @prop({required: true})
    readonly date: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);