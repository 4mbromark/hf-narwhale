import { CommissionService } from './service/commission.service';
import { CreatorDao } from './dao/creator.dao';
import { UserDao } from './dao/user.dao';
import { CreatorService } from './service/creator.service';
import { UserService } from './service/user.service';
import { CommissionAction } from './entity/commission-action.entity';
import { CreatorDefaultInformationSharingPolicy } from './entity/creator-default-isp.entity';
import { CreatorPersonalCustomerNote } from './entity/creator-personal-customer-note.entity';
import { CreatorBlockedCustomer } from './entity/creator-blocked-customer.entity';
import { CreatorShowcase } from './entity/creator-showcase.entity';
import { InformationSharingPolicy } from './entity/information-sharing-policy.entity';
import { User } from './entity/user.entity';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Customer } from './entity/customer.entity';
import { Creator } from './entity/creator.entity';
import { CustomerUnregisteredUser } from './entity/customer-unregistered-user.entity';
import { CreatorSpecificInformationSharingPolicy } from './entity/creator-specific-isp.entity';
import { CustomerDefaultInformationSharingPolicy } from './entity/customer-default-isp.entity';
import { CustomerSpecificInformationSharingPolicy } from './entity/customer-specific-isp.entity';
import { CreatorCommissionTemplate } from './entity/creator-commission-template.entity';
import { Commission } from './entity/commission.entity';
import { HighFiveDatabaseModule } from 'hf-database-module';
import { NarwhaleEnviromentModule } from 'hf-narwhale-enviroment-module';
import { CommissionDao } from './dao/commission.dao';

@Global()
@Module({
    imports: [
        HighFiveDatabaseModule,
        NarwhaleEnviromentModule,

        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOSTURL,
            port: +process.env.DB_HOSTPORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PSWD,
            database: process.env.DB_NAME,
            synchronize: false,
            entities: [
                join(__dirname + '/entity/*.entity.{ts,js}')
            ],
            migrations: [
                join(__dirname + '/migration/*.{ts,js}')
            ],
            migrationsRun: true,
            migrationsTableName: "NW_MIGRATION",
            logging: true
        }),
        // npx typeorm migration:create -n CreateTableUser -d src/migration
        TypeOrmModule.forFeature([
            User,

            Creator,

            Customer,
            CustomerUnregisteredUser,

            CreatorShowcase,
            CreatorBlockedCustomer,
            CreatorPersonalCustomerNote,

            InformationSharingPolicy,
            CreatorDefaultInformationSharingPolicy,
            CreatorSpecificInformationSharingPolicy,
            CustomerDefaultInformationSharingPolicy,
            CustomerSpecificInformationSharingPolicy,

            CreatorCommissionTemplate,

            Commission,
            CommissionAction
        ])
    ],
    providers: [
        UserService,
        CreatorService,

        CommissionService,

        UserDao,
        CreatorDao,
        
        CommissionDao
    ],
    exports: [
        UserService,
        CreatorService,
        CommissionService,      
    ]
})
export class NarwhaleDatasourceModule { }