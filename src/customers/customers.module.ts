import {Module} from '@nestjs/common';
import {CustomersService} from './customers.service';
import {CustomersController} from './customers.controller';
import {Customer, CustomerSchema} from "./customers.schema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Customer', schema: CustomerSchema },
        ]),
    ],
    controllers: [CustomersController],
    providers: [CustomersService]
})
export class CustomersModule {
}
