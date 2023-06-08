import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

export class MenuItem {
    @Prop({required: true})
    readonly itemName: string;

    @Prop({required: true})
    readonly price: number;

    @Prop({required: true})
    readonly image: string;

    @Prop({required: true})
    readonly quantity: number
}

@Schema()
export class Shop {
    @Prop({required: true})
    readonly shopName: string;

    @Prop({required: true})
    readonly logo: string;

    @Prop({required: true})
    readonly isActive: boolean;

    @Prop({type: () => [MenuItem]})
    readonly menu: MenuItem[]
}
export const ShopSchema = SchemaFactory.createForClass(Shop);

