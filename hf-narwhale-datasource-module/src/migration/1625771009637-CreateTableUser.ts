import {MigrationInterface, QueryRunner} from "typeorm";
import * as fs from 'fs';
import { join } from "path";

export class CreateTableUser1625771009637 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const script = fs.readFileSync(join(__dirname + '/script/001-CreateTableUser.sql'), 'utf8');
        queryRunner.query(script);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
