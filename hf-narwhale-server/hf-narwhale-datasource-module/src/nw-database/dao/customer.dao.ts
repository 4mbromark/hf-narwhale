import { Customer } from './../entity/customer.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';

@Injectable()
export class CustomerDao extends HighFiveBaseDao<Customer> {

    constructor(
        @InjectRepository(Customer) private customersRepository: Repository<Customer>
    ) {
        super(customersRepository);
    }

    public async getById(id: number): Promise<Customer> {
        const creator = await this.customersRepository.createQueryBuilder('customer')
        .leftJoinAndSelect("customer.user", "user")
        // .select(["customer.id", "customer.idUser", "user.idRegistry", "user.blocked", "customer.insertDate", "customer.updateDate"])
        .where("customer.id = :id", { id: id })
        .getOne();

        return creator;
    }

    public async getByIdUser(idUser: number): Promise<Customer> {
        const customer = await this.customersRepository.createQueryBuilder('customer')
        .leftJoinAndSelect("customer.user", "user")
        // .select(["customer.id", "customer.idUser", "user.idRegistry", "user.blocked", "customer.insertDate", "customer.updateDate"])
        .where("customer.idUser = :idUser", { idUser: idUser })
        .getOne();

        return customer;
    }

    public async getByIdRegistry(idRegistry: number): Promise<Customer> {
        const customer = await this.customersRepository.createQueryBuilder('customer')
        .leftJoinAndSelect("customer.user", "user")
        // .select(["customer.id", "customer.idUser", "user.idRegistry", "user.blocked", "customer.insertDate", "customer.updateDate"])
        .where("user.idRegistry = :idRegistry", { idRegistry: idRegistry })
        .getOne();

        return customer;
    }
}