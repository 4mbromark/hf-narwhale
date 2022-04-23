import { CustomerCollectiveService } from './../collective/customer-collective.service';
import { HighFiveUser } from 'hf-ds-module';
import { BadRequestException, Injectable } from "@nestjs/common";
import { CommissionService, CustomerUnregisteredUser } from "hf-narwhale-datasource-module";

@Injectable()
export class CustomerControllerService {

    constructor(
        private customerCollectiveService: CustomerCollectiveService,
        private commissionService: CommissionService
    ) {}

    public async getUserByIdCustomerAndIsp(idCustomer: number, idCreator: number, tk: string): Promise<HighFiveUser | CustomerUnregisteredUser> {
        const user = await this.customerCollectiveService.getUserByIdCustomerAndIsp(idCustomer, idCreator, tk);
        return user;
    }

    public async getUserByIdCommissionAndIsp(idCommission: number, idCreator: number, tk: string): Promise<HighFiveUser | CustomerUnregisteredUser> {
        const commission = await this.commissionService.getById(idCommission);

        if (commission) {
            let user = null;

            const idCustomer = commission.idCustomer;
            if (idCustomer) {
                user = await this.getUserByIdCustomerAndIsp(idCustomer, idCreator, tk);
            }

            return user;
        }

        throw new BadRequestException();
    }
}