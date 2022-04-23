import { CommissionResourceDao } from './../dao/commission-resource.dao';
import { CommissionResource } from './../entity/commission-resource.entity';
import { Injectable } from '@nestjs/common';
import { CommissionableService } from '../common/commissionable.service';

@Injectable()
export class CommissionResourceService extends CommissionableService<CommissionResource> {

    constructor(
        private commissionResourceDao: CommissionResourceDao
    ) {
        super(commissionResourceDao)
    }
}