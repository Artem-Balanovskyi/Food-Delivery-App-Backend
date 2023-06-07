import {Controller, Get, Post, Body, Param, Delete, Res, HttpStatus, Put} from '@nestjs/common';
import {CustomersService} from './customers.service';
import {CreateOrderDto} from './dto/create-order.dto';
import {UpdateCustomerDto} from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {
    }

    @Post()
    async create(
        @Res() response,
        @Body() createCustomerDto: CreateOrderDto
    ) {
        try {
            const newCustomer = await this.customersService.create(createCustomerDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Customer has been created successfully', newCustomer
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Customer was not created!',
                error: 'Bad Request'
            });
        }
    }

    @Get()
    async findAll(
        @Res() response
    ) {
        try {
            const customersData = await this.customersService.findAll();
            return response.status(HttpStatus.OK).json({
                message: 'All customers data was found successfully',
                customers: customersData
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
            const existingCustomer = await
                this.customersService.findOne(id);
            return response.status(HttpStatus.OK).json({
                message: 'Customer was found successfully', existingCustomer
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Put(':id')
    async update(
        @Res() response,
        @Param('id') id: number,
        @Body() updateCustomerDto: UpdateCustomerDto
    ) {
        try {
            const existingCustomer = await this.customersService.update(id, updateCustomerDto);
            return response.status(HttpStatus.OK).json({
                message: 'Customer has been successfully updated', existingCustomer
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
            const deletedCustomer = await this.customersService.remove(id);
            return response.status(HttpStatus.OK).json({
                message: 'Customer was deleted successfully', deletedCustomer
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
