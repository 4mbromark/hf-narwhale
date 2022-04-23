import { CustomerUnregisteredUser } from './../entity/customer-unregistered-user.entity';
import { Commission } from './../entity/commission.entity';
import { Creator } from './../entity/creator.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { HighFiveBaseDao } from 'hf-database-module';

@Injectable()
export class CustomerUnregisteredUserDao extends HighFiveBaseDao<CustomerUnregisteredUser> {

    constructor(
        @InjectRepository(CustomerUnregisteredUser) private customerUnregisteredUsersRepository: Repository<CustomerUnregisteredUser>,
    ) {
        super(customerUnregisteredUsersRepository);
    }

    public async getByIdCustomer(idCustomer: number): Promise<CustomerUnregisteredUser> {
        const customerUnregisteredUserList = await this.customerUnregisteredUsersRepository.createQueryBuilder('customerUnregisteredUser')
        .where("customerUnregisteredUser.idCustomer = :idCustomer", { idCustomer: idCustomer })
        .getOne();

        return customerUnregisteredUserList;
    }
}