import { Creator } from './../entity/creator.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { HighFiveBaseDao } from 'hf-database-module';

@Injectable()
export class CreatorDao extends HighFiveBaseDao<Creator> {

    constructor(
        @InjectRepository(Creator) private creatorsRepository: Repository<Creator>,
    ) {
        super(creatorsRepository);
    }

    public async getByIdUser(idUser: number): Promise<Creator> {
        const creator = await this.creatorsRepository.findOne({
            where: [
                { idUser: idUser }
            ]
        })
        return creator;
    }

    public async getByIdRegistry(idRegistry: number): Promise<Creator> {
        const creator = await this.creatorsRepository.findOne({
            join: {
                alias: "creator",
                leftJoin: {
                    user: "creator.idUser"
                }
            },
            where: [
                { "user.idRegistry": idRegistry }
            ]
        })
        return creator;
    }
}