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
exports.ShopsController = void 0;
const common_1 = require("@nestjs/common");
const shops_service_1 = require("./shops.service");
const create_shop_dto_1 = require("./dto/create-shop.dto");
const update_shop_dto_1 = require("./dto/update-shop.dto");
let ShopsController = exports.ShopsController = class ShopsController {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    async create(response, createShopDto) {
        try {
            const newShop = await this.shopsService.create(createShopDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Shop has been created successfully',
                newShop: newShop
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Shop was not created!',
                error: 'Bad Request'
            });
        }
    }
    async findAll(response) {
        try {
            const shopsData = await this.shopsService.findAll();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All shops data was found successfully',
                shops: shopsData
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async findOne(response, id) {
        try {
            const existingShop = await this.shopsService.findOne(id);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Shop was found successfully', existingShop: existingShop,
            });
        }
        catch (err) {
            console.log(`err1:${err.message}`);
            return response.status(err.status).json(err.response);
        }
    }
    async update(response, id, updateShopDto) {
        try {
            const existingShop = await this.shopsService.update(id, updateShopDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Shop has been successfully updated',
                existingShop
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async remove(response, id) {
        try {
            const deletedShop = await this.shopsService.remove(id);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Shop was deleted successfully',
                deletedShop
            });
        }
        catch (err) {
            console.log(`err2:${err.message}`);
            return response.status(err.status).json(err.response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_shop_dto_1.CreateShopDto]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_shop_dto_1.UpdateShopDto]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "remove", null);
exports.ShopsController = ShopsController = __decorate([
    (0, common_1.Controller)('shops'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], ShopsController);
//# sourceMappingURL=shops.controller.js.map