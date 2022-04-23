import { CommissionAnnotationDao } from './../dao/commission-annotation.dao';
import { Injectable } from '@nestjs/common';
import { CommissionAnnotation } from '../entity/commission-annotation.entity';
import { CommissionableService } from '../common/commissionable.service';

@Injectable()
export class CommissionAnnotationService extends CommissionableService<CommissionAnnotation> {

    constructor(
        private commissionAnnotationDao: CommissionAnnotationDao
    ) {
        super(commissionAnnotationDao)
    }
}