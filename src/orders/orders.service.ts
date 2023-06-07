import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {InjectModel} from "@nestjs/mongoose";
import {ReturnModelType} from "@typegoose/typegoose";
import {Order} from "./orders.schema";
@Injectable()
export class OrdersService {

  constructor(@InjectModel('Order') private readonly ordersModel: ReturnModelType<typeof Order>) {
  }
  async create(createOrderDto: CreateOrderDto) {
    const newOrder = await new this.ordersModel({...createOrderDto});
    return newOrder.save();
  }

  async findAll() {
    const orderData = await this.ordersModel.find().exec();
    if (!orderData) {
      throw new NotFoundException('Orders data not found!');
    }
    return orderData;
  }

  async findOne(id: number) {
    const existingOrder = await     this.ordersModel.findById(id).exec();
    if (!existingOrder) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return existingOrder;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const existingOrder = await this.ordersModel.findByIdAndUpdate(id, UpdateOrderDto, {new: true});
    if (!existingOrder) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return existingOrder;
  }

  async remove(id: number)  {
    const deletedOrder = await this.ordersModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return deletedOrder;
  }
}
