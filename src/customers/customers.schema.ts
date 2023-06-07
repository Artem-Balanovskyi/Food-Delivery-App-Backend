import {prop} from '@typegoose/typegoose';
import {Order} from "../orders/orders.schema";
import {Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Customer {
    @prop({required: true})
    readonly _id: number;

    @prop({required: true})
    readonly name: string;

    @prop({required: true})
    readonly email: string;

    @prop({required: true})
    readonly phone: string;

    @prop({required: true})
    readonly address: string;

    @prop({type: () => [Order]})
    readonly orders: Order[]
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);