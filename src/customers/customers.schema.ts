import {Order} from "../orders/orders.schema";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Customer {
    @Prop({required: true})
    readonly _id: number;

    @Prop({required: true})
    readonly name: string;

    @Prop({required: true})
    readonly email: string;

    @Prop({required: true})
    readonly phone: string;

    @Prop({required: true})
    readonly address: string;

    @Prop({type: () => [Order]})
    readonly orders: Order[]
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);