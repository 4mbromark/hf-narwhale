import { HighFiveUser } from 'hf-ds-module';
import { CentralRegistryService } from 'hf-narwhale-registry-module';
import { Injectable } from "@nestjs/common";
import { CommissionActionType, CommissionStatus, CommissionType } from "hf-narwhale-common-module";
import { Commission, CommissionAction, CommissionActionService, CommissionService, Customer, CustomerDefaultInformationSharingPolicy, CustomerDefaultInformationSharingPolicyService, CustomerService, CustomerSpecificInformationSharingPolicyService, User } from "hf-narwhale-datasource-module";

@Injectable()
export class CustomerControllerService {

    constructor(
        private customerService: CustomerService,
        private centralRegistryService: CentralRegistryService,
        private customerDefaultIspService: CustomerDefaultInformationSharingPolicyService,
        private customerSpecificIspService: CustomerSpecificInformationSharingPolicyService
    ) {}

    public async getByIdCustomerAndIsp(idCustomer: number, idCreator: number, tk: string): Promise<HighFiveUser> {
        const customer = await this.customerService.getById(idCustomer);

        if (customer) {
            const idRegistry = customer.idRegistry;

            if (idRegistry) {
                const user = await this.centralRegistryService.getUser(tk, idCustomer);

                const customerSpecificIsp = await this.customerSpecificIspService.getByIdCustomerAndIdCreator(idCustomer, idCreator);
                let customerDefaultIsp;
                if (!customerSpecificIsp) {
                    customerDefaultIsp = await this.customerDefaultIspService.getByIdCustomer(idCustomer);
                }
                const isp = customerSpecificIsp ? customerSpecificIsp.isp : customerDefaultIsp.isp;

                return user;
            } else {
                // TODO
            }

        }
    }
}