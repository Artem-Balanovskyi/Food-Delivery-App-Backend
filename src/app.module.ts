import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypegooseModule} from "nestjs-typegoose";
import {ConfigModule} from "@nestjs/config";
import {getMongoUri} from "./configs/mongo.config";
import {ShopsModule} from './shops/shops.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypegooseModule.forRoot(getMongoUri()),
        ShopsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
