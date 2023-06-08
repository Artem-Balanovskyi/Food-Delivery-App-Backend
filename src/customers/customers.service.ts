import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Customer} from "./customers.schema";
import {Model} from "mongoose";

@Injectable()
export class CustomersService {

  constructor(@InjectModel('Customer') private readonly customersModel: Model<Customer>) {
  }
  async create(createCustomerDto: CreateOrderDto) {
    const newCustomer = await new this.customersModel({...createCustomerDto});
    return newCustomer.save();
  }

  async findAll() {
    const customerData = await this.customersModel.find().exec();
    if (!customerData) {
      throw new NotFoundException('Customers data not found!');
    }
    return customerData;
  }

  async findOne(id: number) {
    const existingCustomer = await     this.customersModel.findById(id).exec();
    if (!existingCustomer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return existingCustomer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const existingCustomer = await this.customersModel.findByIdAndUpdate(id, updateCustomerDto, {new: true});
    if (!existingCustomer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return existingCustomer;
  }

  async remove(id: number)  {
    const deletedCustomer = await this.customersModel.findByIdAndDelete(id);
    if (!deletedCustomer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return deletedCustomer;
  }
}
