import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {ShopSchema} from "./shop.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Shop', schema: ShopSchema },
    ]),
  ],
  controllers: [ShopsController],
  providers: [ShopsService]
})
export class ShopsModule {}
