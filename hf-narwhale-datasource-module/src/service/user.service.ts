import { UserDao } from './../dao/user.dao';
import { User } from './../entity/user.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';

@Injectable()
export class UserService extends HighFiveBaseService<User> {

    constructor(
        private userDao: UserDao
    ) {
        super(userDao)
    }

    public async getByIdRegistry(idRegistry: number): Promise<User> {
        return await this.userDao.getByIdRegistry(idRegistry);
    }
}