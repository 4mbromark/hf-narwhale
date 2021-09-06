import { Commission } from './../entity/commission.entity';
import { Creator } from './../entity/creator.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { HighFiveBaseDao } from 'hf-database-module';

@Injectable()
export class CommissionDao extends HighFiveBaseDao<Commission> {

    constructor(
        @InjectRepository(Commission) private commissionsRepository: Repository<Commission>,
    ) {
        super(commissionsRepository);
    }

    public async getByIdCreator(idCreator: number): Promise<Commission[]> {
        const commissionList = await this.commissionsRepository.find({
            where: [
                { idCreator: idCreator }
            ]
        })
        return commissionList;
    }
}