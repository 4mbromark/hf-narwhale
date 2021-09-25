import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { CreatorSpecificInformationSharingPolicy } from '../entity/creator-specific-isp.entity';
import { CreatorSpecificInformationSharingPolicyDao } from '../dao/creator-specific-isp.dao';

@Injectable()
export class CreatorSpecificInformationSharingPolicyService extends HighFiveBaseService<CreatorSpecificInformationSharingPolicy> {

    constructor(
        private creatorSpecificIspDao: CreatorSpecificInformationSharingPolicyDao
    ) {
        super(creatorSpecificIspDao)
    }

    public async getByIdCreatorAndIdCustomer(idCreator: number, idCustomer: number): Promise<CreatorSpecificInformationSharingPolicy> {
        return await this.creatorSpecificIspDao.getByIdCreatorAndIdCustomer(idCreator, idCustomer);
    }
}