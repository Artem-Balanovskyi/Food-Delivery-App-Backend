import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import {TypegooseModule} from "nestjs-typegoose";
import {Shop} from "./shops.model";

@Module({
  imports: [    TypegooseModule.forFeature([Shop])  ],
  controllers: [ShopsController],
  providers: [ShopsService]
})
export class ShopsModule {}
