import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';
import { Commissionable } from "./commissionable.entity";

export abstract class CommissionableDao<T extends Commissionable> extends HighFiveBaseDao<T> {

    constructor(
        private commissionableRepository: Repository<T>,
    ) {
        super(commissionableRepository);
    }

    public async getByIdCommission(idCommission: number): Promise<T[]> {
        const commissionableList = await this.commissionableRepository.createQueryBuilder('commissionable')
        .where('commissionable.idCommission = :idCommission', { idCommission: idCommission })
        .orderBy('commissionable.id', 'DESC')
        .getMany();

        return commissionableList;
    }
}