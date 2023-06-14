/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Order } from "../orders/orders.schema";
export declare class Customer {
    readonly _id: number;
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly orders: Order[];
}
export declare const CustomerSchema: import("mongoose").Schema<Customer, import("mongoose").Model<Customer, any, any, any, import("mongoose").Document<unknown, any, Customer> & Omit<Customer & Required<{
    _id: number;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Customer, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Customer>> & Omit<import("mongoose").FlatRecord<Customer> & Required<{
    _id: number;
}>, never>>;
