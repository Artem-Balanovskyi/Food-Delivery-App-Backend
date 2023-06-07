import {Module} from '@nestjs/common';
import {OrdersService} from './orders.service';
import {OrdersController} from './orders.controller';
import {Order, OrderSchema} from "./orders.schema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Order', schema: OrderSchema },
        ]),
    ],
    controllers: [OrdersController],
    providers: [OrdersService]
})
export class OrdersModule {
}
