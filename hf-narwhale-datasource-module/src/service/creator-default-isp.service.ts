import { CreatorDefaultInformationSharingPolicy } from './../entity/creator-default-isp.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { CreatorDefaultInformationSharingPolicyDao } from '../dao/customer-default-isp.dao';

@Injectable()
export class CreatorDefaultInformationSharingPolicyService extends HighFiveBaseService<CreatorDefaultInformationSharingPolicy> {

    constructor(
        private creatorDefaultIspDao: CreatorDefaultInformationSharingPolicyDao
    ) {
        super(creatorDefaultIspDao)
    }

    public async getByIdCreator(idCreator: number): Promise<CreatorDefaultInformationSharingPolicy> {
        return await this.creatorDefaultIspDao.getByIdCreator(idCreator);
    }
}