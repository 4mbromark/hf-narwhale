import { CommissionResource } from './../entity/commission-resource.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommissionableDao } from '../common/commissionable.dao';

@Injectable()
export class CommissionResourceDao extends CommissionableDao<CommissionResource> {

    constructor(
        @InjectRepository(CommissionResource) private commissionResourcesRepository: Repository<CommissionResource>,
    ) {
        super(commissionResourcesRepository);
    }
}