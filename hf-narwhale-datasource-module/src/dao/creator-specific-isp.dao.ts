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

    public async getByIdCreatorAndIdCustomer(idCreator: number, idCustomer: number): Promise<CreatorSpecificInformationSharingPolicy> {
        const creatorSpecificIsp = this.creatorSpecificIspsRepository.createQueryBuilder('creatorSpecificIsp')
        .leftJoinAndSelect("creatorSpecificIsp.creator", "isp")
        .select(["creatorSpecificIsp.id", "creatorSpecificIsp.idCreator", "isp.firstName", "isp.lastName", "isp.birthDay", "isp.emailAddress", "isp.phoneNumber", "isp.partialAddress", "isp.fullDay", "creatorSpecificIsp.insertDate", "creatorSpecificIsp.updateDate"])
        .where("creatorSpecificIsp.idCreator = :idCreator AND creatorSpecificIsp.idCustomer = :idCustomer", { idCreator: idCreator, idCustomer: idCustomer })
        .getOne();

        return creatorSpecificIsp;
    }
}