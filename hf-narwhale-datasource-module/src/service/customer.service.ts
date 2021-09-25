import { CustomerDao } from './../dao/customer.dao';
import { Customer } from './../entity/customer.entity';
import { CreatorDao } from './../dao/creator.dao';
import { Creator } from './../entity/creator.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';

@Injectable()
export class CustomerService extends HighFiveBaseService<Customer> {

    constructor(
        private customerDao: CustomerDao
    ) {
        super(customerDao)
    }

    public async getByIdUser(idUser: number): Promise<Customer> {
        return await this.customerDao.getByIdUser(idUser);
    }

    public async getByIdRegistry(idRegistry: number): Promise<Customer> {
        return await this.customerDao.getByIdRegistry(idRegistry);
    }
}