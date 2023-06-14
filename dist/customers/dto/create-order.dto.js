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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderDto = void 0;
const class_validator_1 = require("class-validator");
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The customer`s id can not be empty.' }),
    (0, class_validator_1.IsString)({ message: ' The customer`s id should be a number.' }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The customer`s name can not be empty.' }),
    (0, class_validator_1.IsString)({ message: ' The customer`s name should be a string.' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The customer`s email can not be empty.' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The customer`s phone can not be empty.' }),
    (0, class_validator_1.IsBoolean)({ message: 'The customer`s phone should be a string type.' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The customer`s address can not be empty.' }),
    (0, class_validator_1.IsBoolean)({ message: 'The customer`s address should be a string type.' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The customer`s orders can not be empty.' }),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "orders", void 0);
//# sourceMappingURL=create-order.dto.js.map