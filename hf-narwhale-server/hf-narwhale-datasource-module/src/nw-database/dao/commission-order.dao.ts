import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommissionOrder } from '../entity/commission-order.entity';
import { CommissionableDao } from '../common/commissionable.dao';

@Injectable()
export class CommissionOrderDao extends CommissionableDao<CommissionOrder> {

    constructor(
        @InjectRepository(CommissionOrder) private commissionOrdersRepository: Repository<CommissionOrder>,
    ) {
        super(commissionOrdersRepository);
    }

    public async getCurrentByIdCommission(idCommission: number): Promise<CommissionOrder> {
        const commissionOrder = await this.commissionOrdersRepository.createQueryBuilder('commissionOrder')
        .where('commissionOrder.idCommission = :idCommission', { idCommission: idCommission })
        .orderBy('commissionOrder.id', 'DESC')
        .getOne();

        return commissionOrder;
    }
}