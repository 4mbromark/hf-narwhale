import { CustomerUnregisteredUserService } from './nw-database/service/customer-unregistered-user.service';
import { CommissionOrderService } from './nw-database/service/commission-order.service';
import { CommissionOrder } from './nw-database/entity/commission-order.entity';
import { CommissionMessageDao } from './nw-database/dao/commission-message.dao';
import { CommissionResourceService } from './nw-database/service/commission-resource.service';
import { CommissionMessageService } from './nw-database/service/commission-message.service';
import { CommissionResource } from './nw-database/entity/commission-resource.entity';
import { CommissionResourceDao } from './nw-database/dao/commission-resource.dao';
import { CommissionMessage } from './nw-database/entity/commission-message.entity';
import { CommissionAnnotationService } from './nw-database/service/commission-annotation.service';
import { CommissionAnnotationDao } from './nw-database/dao/commission-annotation.dao';
import { CommissionAnnotation } from './nw-database/entity/commission-annotation.entity';
import { CreatorSpecificInformationSharingPolicyService } from './nw-database/service/creator-specific-isp.service';
import { CreatorDefaultInformationSharingPolicyService } from './nw-database/service/creator-default-isp.service';
import { CustomerService } from './nw-database/service/customer.service';
import { CreatorSpecificInformationSharingPolicyDao } from './nw-database/dao/creator-specific-isp.dao';
import { CustomerDao } from './nw-database/dao/customer.dao';
import { CommissionActionService } from './nw-database/service/commission-action.service';
import { CommissionActionDao } from './nw-database/dao/commission-action.dao.';
import { CommissionService } from './nw-database/service/commission.service';
import { CreatorDao } from './nw-database/dao/creator.dao';
import { UserDao } from './nw-database/dao/user.dao';
import { CreatorService } from './nw-database/service/creator.service';
import { UserService } from './nw-database/service/user.service';
import { CommissionAction } from './nw-database/entity/commission-action.entity';
import { CreatorDefaultInformationSharingPolicy } from './nw-database/entity/creator-default-isp.entity';
import { CreatorPersonalCustomerNote } from './nw-database/entity/creator-personal-customer-note.entity';
import { CreatorBlockedCustomer } from './nw-database/entity/creator-blocked-customer.entity';
import { CreatorShowcase } from './nw-database/entity/creator-showcase.entity';
import { InformationSharingPolicy } from './nw-database/entity/information-sharing-policy.entity';
import { User } from './nw-database/entity/user.entity';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Customer } from './nw-database/entity/customer.entity';
import { Creator } from './nw-database/entity/creator.entity';
import { CustomerUnregisteredUser } from './nw-database/entity/customer-unregistered-user.entity';
import { CreatorSpecificInformationSharingPolicy } from './nw-database/entity/creator-specific-isp.entity';
import { CustomerDefaultInformationSharingPolicy } from './nw-database/entity/customer-default-isp.entity';
import { CustomerSpecificInformationSharingPolicy } from './nw-database/entity/customer-specific-isp.entity';
import { CreatorCommissionTemplate } from './nw-database/entity/creator-commission-template.entity';
import { Commission } from './nw-database/entity/commission.entity';
import { HighFiveDatabaseModule } from 'hf-database-module';
import { CommissionDao } from './nw-database/dao/commission.dao';
import { CreatorDefaultInformationSharingPolicyDao } from './nw-database/dao/creator-default-isp.dao';
import { CustomerDefaultInformationSharingPolicyService } from './nw-database/service/customer-default-isp.service';
import { CustomerSpecificInformationSharingPolicyService } from './nw-database/service/customer-specific-isp.service';
import { CustomerDefaultInformationSharingPolicyDao } from './nw-database/dao/customer-default-isp.dao';
import { CustomerSpecificInformationSharingPolicyDao } from './nw-database/dao/customer-specific-isp.dao';
import { CommissionOrderDao } from './nw-database/dao/commission-order.dao';
import { CustomerUnregisteredUserDao } from './nw-database/dao/customer-unregistered-user.dao';
import { HighFiveEnvironmentModule } from 'hf-env-module';

@Module({
    imports: [
        HighFiveDatabaseModule,
        HighFiveEnvironmentModule,

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
            migrationsTableName: "NW_MIGRATION",
            logging: false
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
            CommissionAction,
            CommissionAnnotation,
            CommissionMessage,
            CommissionResource,
            CommissionOrder
        ])
    ],
    providers: [
        /** DATABASE SERVICES */
        UserService,
        CreatorService,
        CustomerService,
        CustomerUnregisteredUserService,

        CreatorDefaultInformationSharingPolicyService,
        CreatorSpecificInformationSharingPolicyService,
        CustomerDefaultInformationSharingPolicyService,
        CustomerSpecificInformationSharingPolicyService,

        CommissionService,
        CommissionActionService,
        CommissionAnnotationService,
        CommissionMessageService,
        CommissionResourceService,
        CommissionOrderService,

        /** DATABASE DAO */
        UserDao,
        CreatorDao,
        CustomerDao,
        CustomerUnregisteredUserDao,

        CreatorDefaultInformationSharingPolicyDao,
        CreatorSpecificInformationSharingPolicyDao,
        CustomerDefaultInformationSharingPolicyDao,
        CustomerSpecificInformationSharingPolicyDao,
        
        CommissionDao,
        CommissionActionDao,
        CommissionAnnotationDao,
        CommissionMessageDao,
        CommissionResourceDao,
        CommissionOrderDao
    ],
    exports: [
        UserService,
        CreatorService,
        CustomerService,
        CustomerUnregisteredUserService,
        CreatorDefaultInformationSharingPolicyService,
        CreatorSpecificInformationSharingPolicyService,
        CustomerDefaultInformationSharingPolicyService,
        CustomerSpecificInformationSharingPolicyService,
        CommissionService,   
        CommissionActionService,
        CommissionAnnotationService,
        CommissionMessageService,
        CommissionResourceService,  
        CommissionOrderService
    ]
})
export class NarwhaleDatasourceModule { }
