import { CustomersService } from './customers.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(response: any, createCustomerDto: CreateOrderDto): Promise<any>;
    findAll(response: any): Promise<any>;
    findOne(response: any, id: number): Promise<any>;
    update(response: any, id: number, updateCustomerDto: UpdateCustomerDto): Promise<any>;
    remove(response: any, id: number): Promise<any>;
}
