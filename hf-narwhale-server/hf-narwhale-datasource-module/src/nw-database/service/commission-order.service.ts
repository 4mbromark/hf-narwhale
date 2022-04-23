import { BadRequestException, Injectable } from '@nestjs/common';
import { CommissionOrder } from '../entity/commission-order.entity';
import { CommissionOrderDao } from '../dao/commission-order.dao';
import { CommissionableService } from '../common/commissionable.service';

@Injectable()
export class CommissionOrderService extends CommissionableService<CommissionOrder> {

    constructor(
        private commissionOrderDao: CommissionOrderDao
    ) {
        super(commissionOrderDao)
    }

    public async getCurrentByIdCommission(idCommission: number): Promise<CommissionOrder> {
        const commissionOrder = await this.commissionOrderDao.getCurrentByIdCommission(idCommission);
        return this.returnOrFail(commissionOrder, { name: 'commission', value: idCommission });
    }
}