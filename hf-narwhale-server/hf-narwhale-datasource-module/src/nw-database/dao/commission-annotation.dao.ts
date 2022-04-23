import { CommissionAnnotation } from './../entity/commission-annotation.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommissionableDao } from '../common/commissionable.dao';

@Injectable()
export class CommissionAnnotationDao extends CommissionableDao<CommissionAnnotation> {

    constructor(
        @InjectRepository(CommissionAnnotation) private commissionAnnotationsRepository: Repository<CommissionAnnotation>,
    ) {
        super(commissionAnnotationsRepository);
    }
}