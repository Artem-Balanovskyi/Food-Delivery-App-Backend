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
exports.CustomersController = void 0;
const common_1 = require("@nestjs/common");
const customers_service_1 = require("./customers.service");
const create_order_dto_1 = require("./dto/create-order.dto");
const update_customer_dto_1 = require("./dto/update-customer.dto");
let CustomersController = exports.CustomersController = class CustomersController {
    constructor(customersService) {
        this.customersService = customersService;
    }
    async create(response, createCustomerDto) {
        try {
            const newCustomer = await this.customersService.create(createCustomerDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Customer has been created successfully', newCustomer
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Customer was not created!',
                error: 'Bad Request'
            });
        }
    }
    async findAll(response) {
        try {
            const customersData = await this.customersService.findAll();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All customers data was found successfully',
                customers: customersData
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async findOne(response, id) {
        try {
            const existingCustomer = await this.customersService.findOne(id);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Customer was found successfully', existingCustomer
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async update(response, id, updateCustomerDto) {
        try {
            const existingCustomer = await this.customersService.update(id, updateCustomerDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Customer has been successfully updated', existingCustomer
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async remove(response, id) {
        try {
            const deletedCustomer = await this.customersService.remove(id);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Customer was deleted successfully', deletedCustomer
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_customer_dto_1.UpdateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "remove", null);
exports.CustomersController = CustomersController = __decorate([
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersController);
//# sourceMappingURL=customers.controller.js.map