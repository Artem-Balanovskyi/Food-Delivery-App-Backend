import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateShopDto} from './dto/create-shop.dto';
import {UpdateShopDto} from './dto/update-shop.dto';
import {InjectModel} from "@nestjs/mongoose";
import {ReturnModelType} from "@typegoose/typegoose";
import {Shop} from "./shops.model";

@Injectable()
export class ShopsService {

    constructor(@InjectModel('Shop') private readonly shopsModel: ReturnModelType<typeof Shop>) {
    }

    async create(createShopDto: CreateShopDto) {
        const newShop = await new this.shopsModel({...createShopDto});
        return newShop.save();
    }

    async findAll() {
        const shopData = await this.shopsModel.find().exec();
        if (!shopData) {
            throw new NotFoundException('Shops data not found!');
        }
        return shopData;
    }

    async findOne(id: string) {
        const existingShop = await     this.shopsModel.findById(id).exec();
        if (!existingShop) {
            throw new NotFoundException(`Shop #${id} not found`);
        }
        return existingShop;
    }

    async update(id: string, updateShopDto: UpdateShopDto) {
        const existingShop = await this.shopsModel.findByIdAndUpdate(id, updateShopDto, {new: true});
        if (!existingShop) {
            throw new NotFoundException(`Shop #${id} not found`);
        }
        return existingShop;
    }

    async remove(id: string)  {
        const deletedShop = await this.shopsModel.findByIdAndDelete(id);
        if (!deletedShop) {
            throw new NotFoundException(`Shop #${id} not found`);
        }
        return deletedShop;
    }
}
