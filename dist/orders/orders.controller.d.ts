import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(response: any, createOrderDto: CreateOrderDto): Promise<any>;
    findAll(response: any): Promise<any>;
    findOne(response: any, id: number): Promise<any>;
    update(response: any, id: number, updateOrderDto: UpdateOrderDto): Promise<any>;
    remove(response: any, id: number): Promise<any>;
}
