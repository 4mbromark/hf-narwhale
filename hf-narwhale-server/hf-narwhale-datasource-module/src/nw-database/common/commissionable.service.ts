import { HighFiveBaseService } from 'hf-database-module';
import { CommissionableDao } from './commissionable.dao';
import { Commissionable } from './commissionable.entity';

export abstract class CommissionableService<T extends Commissionable> extends HighFiveBaseService<T> {

    constructor(
        private commissionableDao: CommissionableDao<T>,
    ) {
        super(commissionableDao)
    }

    public async getByIdCommission(idCommission: number): Promise<T[]> {
        return await this.commissionableDao.getByIdCommission(idCommission);
    }
}