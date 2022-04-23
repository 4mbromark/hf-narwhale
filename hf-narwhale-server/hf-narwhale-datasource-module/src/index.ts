import { CustomerUnregisteredUserService } from './nw-database/service/customer-unregistered-user.service';
import { CommissionOrder } from './nw-database/entity/commission-order.entity';
import { CommissionOrderService } from './nw-database/service/commission-order.service';
import { CommissionResource } from './nw-database/entity/commission-resource.entity';
import { CommissionMessage } from './nw-database/entity/commission-message.entity';
import { CommissionAnnotationService } from './nw-database/service/commission-annotation.service';
import { CommissionAnnotation } from './nw-database/entity/commission-annotation.entity';
import { CommissionService } from './nw-database/service/commission.service';
import { CreatorService } from './nw-database/service/creator.service';
import { NarwhaleDatasourceModule } from './datasource.module';
import { CommissionAction } from './nw-database/entity/commission-action.entity';
import { Commission } from './nw-database/entity/commission.entity';
import { CreatorBlockedCustomer } from './nw-database/entity/creator-blocked-customer.entity';
import { CreatorCommissionTemplate } from './nw-database/entity/creator-commission-template.entity';
import { CreatorDefaultInformationSharingPolicy } from './nw-database/entity/creator-default-isp.entity';
import { CreatorPersonalCustomerNote } from './nw-database/entity/creator-personal-customer-note.entity';
import { CreatorShowcase } from './nw-database/entity/creator-showcase.entity';
import { CreatorSpecificInformationSharingPolicy } from './nw-database/entity/creator-specific-isp.entity';
import { Creator } from './nw-database/entity/creator.entity';
import { CustomerDefaultInformationSharingPolicy } from './nw-database/entity/customer-default-isp.entity';
import { CustomerSpecificInformationSharingPolicy } from './nw-database/entity/customer-specific-isp.entity';
import { CustomerUnregisteredUser } from './nw-database/entity/customer-unregistered-user.entity';
import { Customer } from './nw-database/entity/customer.entity';
import { InformationSharingPolicy } from './nw-database/entity/information-sharing-policy.entity';
import { User } from './nw-database/entity/user.entity';
import { UserService } from './nw-database/service/user.service';
import { CommissionActionService } from './nw-database/service/commission-action.service';
import { CreatorDefaultInformationSharingPolicyService } from './nw-database/service/creator-default-isp.service';
import { CreatorSpecificInformationSharingPolicyService } from './nw-database/service/creator-specific-isp.service';
import { CustomerService } from './nw-database/service/customer.service';
import { CustomerDefaultInformationSharingPolicyService } from './nw-database/service/customer-default-isp.service';
import { CustomerSpecificInformationSharingPolicyService } from './nw-database/service/customer-specific-isp.service';
import { CommissionMessageService } from './nw-database/service/commission-message.service';
import { CommissionResourceService } from './nw-database/service/commission-resource.service';
import { CommissionStatus, CommissionStatusSource, COMMISSION_STATUS_SOURCE_LIST, getCommissionStatusPreviousesByStatusAndType, getCommissionStatusSubsequentesByStatusAndType } from './nw-namespace/commission-status.namespace';
import { CommissionActionType, CommissionPriority, CommissionType } from './nw-namespace/commission.namespace';
import { UserDirection } from './nw-namespace/user.namespace';

export {
    NarwhaleDatasourceModule,

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
    CommissionOrder,

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

    UserDirection,
    CommissionType,
    CommissionPriority,
    CommissionActionType,
    CommissionStatus,
    CommissionStatusSource,
    COMMISSION_STATUS_SOURCE_LIST,
    getCommissionStatusPreviousesByStatusAndType,
    getCommissionStatusSubsequentesByStatusAndType
}