import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {MenuItem} from "../shops/shop.schema";

@Schema()
export class Order {

    @Prop({required: true})
    readonly _id: number;

    @Prop({required: true})
    readonly shopName: string;

    @Prop({required: true})
    readonly customerName: string;

    @Prop({type: () => [MenuItem]})
    readonly orderItems: MenuItem[]

    @Prop({required: true})
    readonly totalPrice: number

    @Prop({required: true})
    readonly date: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);