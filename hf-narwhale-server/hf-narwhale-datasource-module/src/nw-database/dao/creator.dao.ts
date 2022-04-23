import { Creator } from './../entity/creator.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { HighFiveBaseDao } from 'hf-database-module';

@Injectable()
export class CreatorDao extends HighFiveBaseDao<Creator> {

    constructor(
        @InjectRepository(Creator) private creatorsRepository: Repository<Creator>
    ) {
        super(creatorsRepository);
    }

    public async getById(id: number): Promise<Creator> {
        const creator = await this.creatorsRepository.createQueryBuilder('creator')
        .leftJoinAndSelect("creator.user", "user")
        // .select(["creator.id", "creator.idUser", "user.idRegistry", "user.blocked", "creator.insertDate", "creator.updateDate"])
        .where("creator.id = :id", { id: id })
        .getOne();

        return creator;
    }

    public async getByIdUser(idUser: number): Promise<Creator> {
        const creator = await this.creatorsRepository.createQueryBuilder('creator')
        .leftJoinAndSelect("creator.user", "user")
        // .select(["creator.id", "creator.idUser", "user.idRegistry", "user.blocked", "creator.insertDate", "creator.updateDate"])
        .where("creator.idUser = :idUser", { idUser: idUser })
        .getOne();

        return creator;
    }

    public async getByIdRegistry(idRegistry: number): Promise<Creator> {
        const creator = await this.creatorsRepository.createQueryBuilder('creator')
        .leftJoinAndSelect("creator.user", "user")
        // .select(["creator.id", "creator.idUser", "user.idRegistry", "user.blocked", "creator.insertDate", "creator.updateDate"])
        .where("user.idRegistry = :idRegistry", { idRegistry: idRegistry })
        .getOne();

        return creator;
    }
}