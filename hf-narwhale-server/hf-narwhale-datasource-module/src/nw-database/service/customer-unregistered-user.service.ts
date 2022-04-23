import { CustomerUnregisteredUserDao } from './../dao/customer-unregistered-user.dao';
import { CustomerUnregisteredUser } from './../entity/customer-unregistered-user.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';

@Injectable()
export class CustomerUnregisteredUserService extends HighFiveBaseService<CustomerUnregisteredUser> {

    constructor(
        private customerUnregisteredUserDao: CustomerUnregisteredUserDao
    ) {
        super(customerUnregisteredUserDao)
    }

    public async getByIdCustomer(idCustomer: number): Promise<CustomerUnregisteredUser> {
        return await this.customerUnregisteredUserDao.getByIdCustomer(idCustomer);
    }
}