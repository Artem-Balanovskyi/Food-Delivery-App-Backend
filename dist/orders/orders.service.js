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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const update_order_dto_1 = require("./dto/update-order.dto");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrdersService = exports.OrdersService = class OrdersService {
    constructor(ordersModel) {
        this.ordersModel = ordersModel;
    }
    async create(createOrderDto) {
        const newOrder = await new this.ordersModel(Object.assign({}, createOrderDto));
        return newOrder.save();
    }
    async findAll() {
        const orderData = await this.ordersModel.find().exec();
        if (!orderData) {
            throw new common_1.NotFoundException('Orders data not found!');
        }
        return orderData;
    }
    async findOne(id) {
        const existingOrder = await this.ordersModel.findById(id).exec();
        if (!existingOrder) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        return existingOrder;
    }
    async update(id, updateOrderDto) {
        const existingOrder = await this.ordersModel.findByIdAndUpdate(id, update_order_dto_1.UpdateOrderDto, { new: true });
        if (!existingOrder) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        return existingOrder;
    }
    async remove(id) {
        const deletedOrder = await this.ordersModel.findByIdAndDelete(id);
        if (!deletedOrder) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        return deletedOrder;
    }
};
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Order')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrdersService);
//# sourceMappingURL=orders.service.js.map