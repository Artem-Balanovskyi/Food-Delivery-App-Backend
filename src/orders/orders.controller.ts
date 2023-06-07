import {Controller, Get, Post, Body, Param, Delete, Res, HttpStatus, Put} from '@nestjs/common';
import {OrdersService} from './orders.service';
import {CreateOrderDto} from './dto/create-order.dto';
import {UpdateOrderDto} from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {
    }

    @Post()
    async create(
        @Res() response,
        @Body() createOrderDto: CreateOrderDto
    ) {
        try {
            const newOrder = await this.ordersService.create(createOrderDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Order has been created successfully', newOrder
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Order was not created!',
                error: 'Bad Request'
            });
        }
    }

    @Get()
    async findAll(
        @Res() response
    ) {
        try {
            const ordersData = await this.ordersService.findAll();
            return response.status(HttpStatus.OK).json({
                message: 'All orders data was found successfully',
                orders: ordersData
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get(':id')
    async findOne(
        @Res() response,
        @Param('id') id: number
    ) {
        try {
            const existingOrder = await
                this.ordersService.findOne(id);
            return response.status(HttpStatus.OK).json({
                message: 'Order was found successfully', existingOrder,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Put(':id')
    async update(
        @Res() response,
        @Param('id') id: number,
        @Body() updateOrderDto: UpdateOrderDto
    ) {
        try {
            const existingOrder = await this.ordersService.update(id, updateOrderDto);
            return response.status(HttpStatus.OK).json({
                message: 'Order has been successfully updated',
                existingOrder
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete(':id')
    async remove(
        @Res() response,
        @Param('id') id: number
    ) {
        try {
            const deletedOrder = await this.ordersService.remove(id);
            return response.status(HttpStatus.OK).json({
                message: 'Order was deleted successfully', deletedOrder
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
