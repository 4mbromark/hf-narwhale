import {MigrationInterface, QueryRunner} from "typeorm";
import * as fs from 'fs';
import { join } from "path";

export class CreateTableCommissionAction1625771655593 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const script = fs.readFileSync(join(__dirname + '/script/015-CreateTableCommissionAction.sql'), 'utf8');
        queryRunner.query(script);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
