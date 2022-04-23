import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MessageTraceDao } from './nw-database/dao/message-trace.dao';
import { MessageDao } from './nw-database/dao/message.dao';
import { MessageTrace } from './nw-database/entity/message-trace.entity';
import { Message } from './nw-database/entity/message.entity';
import { MessageTraceService } from './nw-database/service/message-trace.service';
import { MessageService } from './nw-database/service/message.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOSTURL,
            port: +process.env.DB_HOSTPORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PSWD,
            database: process.env.DB_NAME,
            synchronize: false,
            entities: [
                join(__dirname + '/nw-database/entity/*.entity.{ts,js}')
            ],
            migrations: [
                join(__dirname + '/nw-database/migration/*.{ts,js}')
            ],
            migrationsRun: true,
            migrationsTableName: "NW_MIGRATION_MESSAGE",
            logging: false
        }),
        // npx typeorm migration:create -n CreateTableUser -d src/migration
        TypeOrmModule.forFeature([
            Message,
            MessageTrace
        ]),
    ],
    providers: [
        /** DATABASE SERVICES */
        MessageService,
        MessageTraceService,

        /** DATABASE DAO */
        MessageDao,
        MessageTraceDao
    ],
    exports: [
        MessageService,
        MessageTraceService,
    ]
})
export class NarwhaleMessageData { }
