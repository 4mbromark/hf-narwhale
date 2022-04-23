import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { HighFiveBaseDao } from 'hf-database-module';

@Injectable()
export class UserDao extends HighFiveBaseDao<User> {

    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) {
        super(usersRepository);
    }

    public async getByIdRegistry(idRegistry: number): Promise<User> {
        const user = await this.usersRepository.createQueryBuilder('user')
        .where("user.idRegistry = :idRegistry", { idRegistry: idRegistry })
        .getOne();

        return user;
    }
}