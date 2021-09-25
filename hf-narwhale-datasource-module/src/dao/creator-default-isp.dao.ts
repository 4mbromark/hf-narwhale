import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';
import { CustomerDefaultInformationSharingPolicy } from '../entity/customer-default-isp.entity';

@Injectable()
export class CustomerDefaultInformationSharingPolicyDao extends HighFiveBaseDao<CustomerDefaultInformationSharingPolicy> {

    constructor(
        @InjectRepository(CustomerDefaultInformationSharingPolicy) private customerDefaultIspsRepository: Repository<CustomerDefaultInformationSharingPolicy>
    ) {
        super(customerDefaultIspsRepository);
    }

    public async getByIdCustomer(idCustomer: number): Promise<CustomerDefaultInformationSharingPolicy> {
        const customerDefaultIsp = this.customerDefaultIspsRepository.createQueryBuilder('customerDefaultIsp')
        .leftJoinAndSelect("customerDefaultIsp.creator", "isp")
        .select(["customerDefaultIsp.id", "customerDefaultIsp.idCreator", "isp.firstName", "isp.lastName", "isp.birthDay", "isp.emailAddress", "isp.phoneNumber", "isp.partialAddress", "isp.fullDay", "customerDefaultIsp.insertDate", "customerDefaultIsp.updateDate"])
        .where("customerDefaultIsp.idCustomer = :idCustomer", { idCustomer: idCustomer })
        .getOne();

        return customerDefaultIsp;
    }
}