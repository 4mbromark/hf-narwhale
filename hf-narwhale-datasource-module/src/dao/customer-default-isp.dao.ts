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

    public async getByIdCreator(idCreator: number): Promise<CreatorDefaultInformationSharingPolicy> {
        const creatorDefaultIsp = this.creatorDefaultIspsRepository.createQueryBuilder('creatorDefaultIsp')
        .leftJoinAndSelect("creatorDefaultIsp.creator", "isp")
        .select(["creatorDefaultIsp.id", "creatorDefaultIsp.idCreator", "isp.firstName", "isp.lastName", "isp.birthDay", "isp.emailAddress", "isp.phoneNumber", "isp.partialAddress", "isp.fullDay", "creatorDefaultIsp.insertDate", "creatorDefaultIsp.updateDate"])
        .where("creatorDefaultIsp.idCreator = :idCreator", { idCreator: idCreator })
        .getOne();

        return creatorDefaultIsp;
    }
}