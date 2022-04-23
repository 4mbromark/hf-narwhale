import { CreatorDefaultInformationSharingPolicy } from '../entity/creator-default-isp.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';

@Injectable()
export class CreatorDefaultInformationSharingPolicyDao extends HighFiveBaseDao<CreatorDefaultInformationSharingPolicy> {

    constructor(
        @InjectRepository(CreatorDefaultInformationSharingPolicy) private creatorDefaultIspsRepository: Repository<CreatorDefaultInformationSharingPolicy>
    ) {
        super(creatorDefaultIspsRepository);
    }

    public async getById(id: number): Promise<CreatorDefaultInformationSharingPolicy> {
        const creatorDefaultIsp = await this.creatorDefaultIspsRepository.createQueryBuilder('creatorDefaultIsp')
        .leftJoinAndSelect("creatorDefaultIsp.creator", "isp")
        .where("creatorDefaultIsp.id = :id", { id: id })
        .getOne();

        return creatorDefaultIsp;
    }

    public async getByIdCreator(idCreator: number): Promise<CreatorDefaultInformationSharingPolicy> {
        const creatorDefaultIsp = await this.creatorDefaultIspsRepository.createQueryBuilder('creatorDefaultIsp')
        .leftJoinAndSelect("creatorDefaultIsp.creator", "isp")
        .where("creatorDefaultIsp.idCreator = :idCreator", { idCreator: idCreator })
        .getOne();

        return creatorDefaultIsp;
    }
}