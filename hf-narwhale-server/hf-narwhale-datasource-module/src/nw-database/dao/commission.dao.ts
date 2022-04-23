import { Commission } from './../entity/commission.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';
import { CommissionStatus } from '../../nw-namespace/commission-status.namespace';

@Injectable()
export class CommissionDao extends HighFiveBaseDao<Commission> {

    constructor(
        @InjectRepository(Commission) private commissionsRepository: Repository<Commission>,
    ) {
        super(commissionsRepository);
    }

    public async getById(id: number): Promise<Commission> {
        const commission = await this.commissionsRepository.createQueryBuilder('commission')
        .leftJoinAndSelect("commission.creator", "creator")
        .leftJoinAndSelect("creator.user", "creatorUser")
        .leftJoinAndSelect("commission.customer", "customer")
        .leftJoinAndSelect("customer.user", "customerUser")
        .leftJoinAndSelect("commission.template", "template")
        .where("commission.id = :id", { id: id })
        .getOne();

        return commission;
    }

    public async getByIdCreator(idCreator: number): Promise<Commission[]> {
        const commissionList = await this.commissionsRepository.createQueryBuilder('commission')
        .leftJoinAndSelect("commission.creator", "creator")
        .leftJoinAndSelect("creator.user", "creatorUser")
        .leftJoinAndSelect("commission.customer", "customer")
        .leftJoinAndSelect("customer.user", "customerUser")
        .leftJoinAndSelect("commission.template", "template")
        .where("commission.idCreator = :idCreator", { idCreator: idCreator })
        .getMany();

        return commissionList;
    }

    public async updateStatus(id: number, currentStatus: CommissionStatus, status: CommissionStatus): Promise<void> {
        await this.commissionsRepository.createQueryBuilder('commission')
        .update(Commission)
        .set({ status: status })
        .where("id = :id AND status = :status", { id: id, status: currentStatus })
        .execute();
    }
}