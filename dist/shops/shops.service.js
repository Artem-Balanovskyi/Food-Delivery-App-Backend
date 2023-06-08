"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ShopsService = exports.ShopsService = class ShopsService {
    constructor(shopsModel) {
        this.shopsModel = shopsModel;
    }
    async create(createShopDto) {
        const newShop = await new this.shopsModel(Object.assign({}, createShopDto));
        return newShop.save();
    }
    async findAll() {
        const shopData = await this.shopsModel.find().exec();
        if (!shopData) {
            throw new common_1.NotFoundException('Shops data not found!');
        }
        return shopData;
    }
    async findOne(id) {
        const existingShop = await this.shopsModel.findById(id).exec();
        if (!existingShop) {
            throw new common_1.NotFoundException(`Shop #${id} not found`);
        }
        return existingShop;
    }
    async update(id, updateShopDto) {
        const existingShop = await this.shopsModel.findByIdAndUpdate(id, updateShopDto, { new: true });
        if (!existingShop) {
            throw new common_1.NotFoundException(`Shop #${id} not found`);
        }
        return existingShop;
    }
    async remove(id) {
        const deletedShop = await this.shopsModel.findByIdAndDelete(id);
        if (!deletedShop) {
            throw new common_1.NotFoundException(`Shop #${id} not found`);
        }
        return deletedShop;
    }
};
exports.ShopsService = ShopsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Shop')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ShopsService);
//# sourceMappingURL=shops.service.js.map