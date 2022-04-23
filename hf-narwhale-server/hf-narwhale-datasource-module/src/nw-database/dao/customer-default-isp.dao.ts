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

    public async getById(id: number): Promise<CustomerDefaultInformationSharingPolicy> {
        const customerDefaultIsp = await this.customerDefaultIspsRepository.createQueryBuilder('customerDefaultIsp')
        .leftJoinAndSelect("customerDefaultIsp.isp", "isp")
        .where("customerDefaultIsp.id = :id", { id: id })
        .getOne();

        return customerDefaultIsp;
    }

    public async getByIdCustomer(idCustomer: number): Promise<CustomerDefaultInformationSharingPolicy> {
        const customerDefaultIsp = await this.customerDefaultIspsRepository.createQueryBuilder('customerDefaultIsp')
        .leftJoinAndSelect("customerDefaultIsp.isp", "isp")
        .where("customerDefaultIsp.idCustomer = :idCustomer", { idCustomer: idCustomer })
        .getOne();

        return customerDefaultIsp;
    }
}