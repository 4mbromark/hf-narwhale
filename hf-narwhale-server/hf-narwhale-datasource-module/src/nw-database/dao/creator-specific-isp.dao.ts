import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';
import { CreatorSpecificInformationSharingPolicy } from '../entity/creator-specific-isp.entity';

@Injectable()
export class CreatorSpecificInformationSharingPolicyDao extends HighFiveBaseDao<CreatorSpecificInformationSharingPolicy> {

    constructor(
        @InjectRepository(CreatorSpecificInformationSharingPolicy) private creatorSpecificIspsRepository: Repository<CreatorSpecificInformationSharingPolicy>
    ) {
        super(creatorSpecificIspsRepository);
    }

    public async getById(id: number): Promise<CreatorSpecificInformationSharingPolicy> {
        const creatorSpecificIsp = await this.creatorSpecificIspsRepository.createQueryBuilder('creatorSpecificIsp')
        .leftJoinAndSelect("creatorSpecificIsp.isp", "isp")
        .where("creatorSpecificIsp.id = :id", { id: id })
        .getOne();

        return creatorSpecificIsp;
    }

    public async getByIdCreatorAndIdCustomer(idCreator: number, idCustomer: number): Promise<CreatorSpecificInformationSharingPolicy> {
        const creatorSpecificIsp = await this.creatorSpecificIspsRepository.createQueryBuilder('creatorSpecificIsp')
        .leftJoinAndSelect("creatorSpecificIsp.isp", "isp")
        .where("creatorSpecificIsp.idCreator = :idCreator AND creatorSpecificIsp.idCustomer = :idCustomer", { idCreator: idCreator, idCustomer: idCustomer })
        .getOne();

        return creatorSpecificIsp;
    }
}