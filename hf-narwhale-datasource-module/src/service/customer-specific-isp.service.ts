import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { CustomerSpecificInformationSharingPolicyDao } from '../dao/customer-specific-isp.dao';
import { CustomerSpecificInformationSharingPolicy } from '../entity/customer-specific-isp.entity';

@Injectable()
export class CustomerSpecificInformationSharingPolicyService extends HighFiveBaseService<CustomerSpecificInformationSharingPolicy> {

    constructor(
        private customerSpecificIspDao: CustomerSpecificInformationSharingPolicyDao
    ) {
        super(customerSpecificIspDao)
    }

    public async getByIdCustomerAndIdCreator(idCustomer: number, idCreator: number): Promise<CustomerSpecificInformationSharingPolicy> {
        return await this.customerSpecificIspDao.getByIdCustomerAndIdCreator(idCustomer, idCreator);
    }
}