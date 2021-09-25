import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';
import { CustomerSpecificInformationSharingPolicy } from "../entity/customer-specific-isp.entity";

@Injectable()
export class CustomerSpecificInformationSharingPolicyDao extends HighFiveBaseDao<CustomerSpecificInformationSharingPolicy> {

    constructor(
        @InjectRepository(CustomerSpecificInformationSharingPolicy) private customerSpecificIspsRepository: Repository<CustomerSpecificInformationSharingPolicy>
    ) {
        super(customerSpecificIspsRepository);
    }

    public async getByIdCustomerAndIdCreator(idCustomer: number, idCreator: number): Promise<CustomerSpecificInformationSharingPolicy> {
        const customerSpecificIsp = this.customerSpecificIspsRepository.createQueryBuilder('customerSpecificIsp')
        .leftJoinAndSelect("customerSpecificIsp.creator", "isp")
        .select(["customerSpecificIsp.id", "customerSpecificIsp.idCreator", "isp.firstName", "isp.lastName", "isp.birthDay", "isp.emailAddress", "isp.phoneNumber", "isp.partialAddress", "isp.fullDay", "customerSpecificIsp.insertDate", "customerSpecificIsp.updateDate"])
        .where(" customerSpecificIsp.idCustomer = :idCustomer AND customerSpecificIsp.idCreator = :idCreator", { idCustomer: idCustomer, idCreator: idCreator })
        .getOne();

        return customerSpecificIsp;
    }
}