import { CreatorDao } from './../dao/creator.dao';
import { Creator } from './../entity/creator.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';

@Injectable()
export class CreatorService extends HighFiveBaseService<Creator> {

    constructor(
        private creatorDao: CreatorDao
    ) {
        super(creatorDao)
    }

    public async getByIdUser(idUser: number): Promise<Creator> {
        return await this.creatorDao.getByIdUser(idUser);
    }

    public async getByIdRegistry(idRegistry: number): Promise<Creator> {
        return await this.creatorDao.getByIdRegistry(idRegistry);
    }
}