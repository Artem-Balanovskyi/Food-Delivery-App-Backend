"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_order_dto_1 = require("./create-order.dto");
class UpdateCustomerDto extends (0, mapped_types_1.PartialType)(create_order_dto_1.CreateOrderDto) {
}
exports.UpdateCustomerDto = UpdateCustomerDto;
//# sourceMappingURL=update-customer.dto.js.map