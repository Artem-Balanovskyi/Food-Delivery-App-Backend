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
exports.CreateShopDto = void 0;
const class_validator_1 = require("class-validator");
class CreateShopDto {
}
exports.CreateShopDto = CreateShopDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The shop`s name can not be empty.' }),
    (0, class_validator_1.IsString)({ message: ' The shop`s name should be a string.' }),
    __metadata("design:type", String)
], CreateShopDto.prototype, "shopName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The shop`s logo can not be empty.' }),
    (0, class_validator_1.IsString)({ message: ' The shop`s logo should be a string.' }),
    __metadata("design:type", String)
], CreateShopDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The shop`s isActive can not be empty.' }),
    (0, class_validator_1.IsBoolean)({ message: 'The shop`s isActive should be a boolean type.' }),
    __metadata("design:type", Boolean)
], CreateShopDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'The shop`s menu can not be empty.' }),
    __metadata("design:type", Array)
], CreateShopDto.prototype, "menu", void 0);
//# sourceMappingURL=create-shop.dto.js.map