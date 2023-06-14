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
/// <reference types="mongoose/types/inferschematype" />
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from "./customers.schema";
import { Model } from "mongoose";
export declare class CustomersService {
    private readonly customersModel;
    constructor(customersModel: Model<Customer>);
    create(createCustomerDto: CreateOrderDto): Promise<import("mongoose").Document<unknown, {}, Customer> & Omit<Customer & Required<{
        _id: number;
    }>, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Customer> & Omit<Customer & Required<{
        _id: number;
    }>, never>)[]>;
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, Customer> & Omit<Customer & Required<{
        _id: number;
    }>, never>>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<import("mongoose").Document<unknown, {}, Customer> & Omit<Customer & Required<{
        _id: number;
    }>, never>>;
    remove(id: number): Promise<import("mongoose").Document<unknown, {}, Customer> & Omit<Customer & Required<{
        _id: number;
    }>, never>>;
}
