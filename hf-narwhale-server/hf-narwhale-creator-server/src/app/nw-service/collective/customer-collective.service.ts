import { HighFiveUser } from 'hf-ds-module';
import { CentralRegistryService } from 'hf-narwhale-registry-module';
import { BadRequestException, Injectable } from "@nestjs/common";
import { CustomerDefaultInformationSharingPolicy, CustomerDefaultInformationSharingPolicyService, CustomerService, CustomerSpecificInformationSharingPolicyService, CustomerUnregisteredUser, CustomerUnregisteredUserService, User } from "hf-narwhale-datasource-module";

@Injectable()
export class CustomerCollectiveService {

    constructor(
        private customerService: CustomerService,
        private customerUnregisteredUserService: CustomerUnregisteredUserService,
        private centralRegistryService: CentralRegistryService,
        private customerDefaultIspService: CustomerDefaultInformationSharingPolicyService,
        private customerSpecificIspService: CustomerSpecificInformationSharingPolicyService
    ) {}

    public async getUserByIdCustomerAndIsp(idCustomer: number, idCreator: number, tk: string): Promise<HighFiveUser | CustomerUnregisteredUser> {
        const customer = await this.customerService.getById(idCustomer);

        if (customer) {
            const idRegistry = customer.user.idRegistry;

            const user = new HighFiveUser();
            if (idRegistry) {
                const completeUser = await this.centralRegistryService.getUser(tk, idRegistry);

                const customerSpecificIsp = await this.customerSpecificIspService.getByIdCustomerAndIdCreator(idCustomer, idCreator);
                let customerDefaultIsp: CustomerDefaultInformationSharingPolicy;
                if (!customerSpecificIsp) {
                    customerDefaultIsp = await this.customerDefaultIspService.getByIdCustomer(idCustomer);
                }
                let isp = null // customerSpecificIsp ? customerSpecificIsp.isp : customerDefaultIsp.isp;
                if (customerSpecificIsp) {
                    isp = customerSpecificIsp.isp;
                }

                user.username = completeUser.username
                if (isp) {
                    user.firstName = isp.firstName ? completeUser.firstName : null;
                    user.lastName = isp.lastName ? completeUser.lastName : null;
                    user.birthDate = isp.birthDate ? completeUser.birthDate : null;
                    user.emailAddress = isp.emailAddress ? completeUser.emailAddress : null;
                    user.phoneNumber = isp.phoneNumber ? completeUser.phoneNumber : null;
                    // TODO address
                } else {
                    user.firstName = completeUser.firstName;
                    user.lastName = completeUser.lastName;
                    user.birthDate = completeUser.birthDate;
                    user.emailAddress = completeUser.emailAddress;
                    user.phoneNumber = completeUser.phoneNumber;
                }
                user.insertDate = completeUser.insertDate
                user.updateDate = completeUser.updateDate
            } else {
                const unregisteredUser = await this.customerUnregisteredUserService.getByIdCustomer(idCustomer);
                user.emailAddress = unregisteredUser.emailAddress;
            }

            return user;
        }

        throw new BadRequestException();
    }
}