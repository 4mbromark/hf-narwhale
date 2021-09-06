import {MigrationInterface, QueryRunner} from "typeorm";
import * as fs from 'fs';
import { join } from "path";

export class CreateTableCustomerDefaultIsp1625771601339 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const script = fs.readFileSync(join(__dirname + '/script/011-CreateTableCustomerDefaultIsp.sql'), 'utf8');
        queryRunner.query(script);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
