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
exports.ShopSchema = exports.Shop = exports.MenuItem = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class MenuItem {
}
exports.MenuItem = MenuItem;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MenuItem.prototype, "itemName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], MenuItem.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MenuItem.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], MenuItem.prototype, "quantity", void 0);
let Shop = exports.Shop = class Shop {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Shop.prototype, "shopName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Shop.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Shop.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => [MenuItem] }),
    __metadata("design:type", Array)
], Shop.prototype, "menu", void 0);
exports.Shop = Shop = __decorate([
    (0, mongoose_1.Schema)()
], Shop);
exports.ShopSchema = mongoose_1.SchemaFactory.createForClass(Shop);
//# sourceMappingURL=shop.schema.js.map