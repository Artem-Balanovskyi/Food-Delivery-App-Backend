import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ShopsModule} from './shops/shops.module';
import {CustomersModule} from "./customers/customers.module";
import {OrdersModule} from "./orders/orders.module";
import {getMongoUri} from "./configs/mongo.config";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        MongooseModule.forRoot(getMongoUri()),
        ShopsModule,
        CustomersModule,
        OrdersModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
