import { CustomerDefaultInformationSharingPolicyDao } from './../dao/creator-default-isp.dao';
import { CustomerDefaultInformationSharingPolicy } from './../entity/customer-default-isp.entity';
import { CreatorDefaultInformationSharingPolicy } from '../entity/creator-default-isp.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { CreatorDefaultInformationSharingPolicyDao } from '../dao/customer-default-isp.dao';

@Injectable()
export class CustomerDefaultInformationSharingPolicyService extends HighFiveBaseService<CustomerDefaultInformationSharingPolicy> {

    constructor(
        private customerDefaultIspDao: CustomerDefaultInformationSharingPolicyDao
    ) {
        super(customerDefaultIspDao)
    }

    public async getByIdCustomer(idCustomer: number): Promise<CustomerDefaultInformationSharingPolicy> {
        return await this.customerDefaultIspDao.getByIdCustomer(idCustomer);
    }
}