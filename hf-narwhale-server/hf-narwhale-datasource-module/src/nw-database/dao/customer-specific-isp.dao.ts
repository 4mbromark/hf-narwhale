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

    public async getById(id: number): Promise<CustomerSpecificInformationSharingPolicy> {
        const customerSpecificIsp = await this.customerSpecificIspsRepository.createQueryBuilder('customerSpecificIsp')
        .leftJoinAndSelect("customerSpecificIsp.isp", "isp")
        .where("customerSpecificIsp.id = :id", { id: id })
        .getOne();

        return customerSpecificIsp;
    }

    public async getByIdCustomerAndIdCreator(idCustomer: number, idCreator: number): Promise<CustomerSpecificInformationSharingPolicy> {
        const customerSpecificIsp = await this.customerSpecificIspsRepository.createQueryBuilder('customerSpecificIsp')
        .leftJoinAndSelect("customerSpecificIsp.isp", "isp")
        .where("customerSpecificIsp.idCustomer = :idCustomer AND customerSpecificIsp.idCreator = :idCreator", { idCustomer: idCustomer, idCreator: idCreator })
        .getOne();

        return customerSpecificIsp;
    }
}