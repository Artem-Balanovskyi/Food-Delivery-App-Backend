import {Controller, Get, Post, Body, Param, Delete, Res, HttpStatus, Put} from '@nestjs/common';
import {ShopsService} from './shops.service';
import {CreateShopDto} from './dto/create-shop.dto';
import {UpdateShopDto} from './dto/update-shop.dto';

@Controller('shops')
export class ShopsController {
    constructor(private readonly shopsService: ShopsService) {
    }

    @Post()
    async create(
        @Res() response,
        @Body() createShopDto: CreateShopDto
    ) {
        try {
            const newShop = await this.shopsService.create(createShopDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Shop has been created successfully',
                newShop: newShop
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Shop was not created!',
                error: 'Bad Request'
            });
        }
    }

    @Get()
    async findAll(
        @Res() response
    ) {
        try {
            const shopsData = await this.shopsService.findAll();
            return response.status(HttpStatus.OK).json({
                message: 'All shops data was found successfully',
                shops: shopsData
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get(':id')
    async findOne(
        @Res() response,
        @Param('id') id: string
    ) {
        try {
            const existingShop = await
                this.shopsService.findOne(id);
            return response.status(HttpStatus.OK).json({
                message: 'Shop was found successfully', existingShop: existingShop,
            });
        } catch (err) {
            console.log(`err1:${err.message}`)
            return response.status(err.status).json(err.response);
        }
    }

    @Put(':id')
    async update(
        @Res() response,
        @Param('id') id: string,
        @Body() updateShopDto: UpdateShopDto
    ) {
        try {
            const existingShop = await this.shopsService.update(id, updateShopDto);
            return response.status(HttpStatus.OK).json({
                message: 'Shop has been successfully updated',
                existingShop
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete(':id')
    async remove(
        @Res() response,
        @Param('id') id: string
    ) {
        try {
            const deletedShop = await this.shopsService.remove(id);
            return response.status(HttpStatus.OK).json({
                message: 'Shop was deleted successfully',
                deletedShop
            });
        } catch (err) {
            console.log(`err2:${err.message}`)
            return response.status(err.status).json(err.response);
        }
    }
}
