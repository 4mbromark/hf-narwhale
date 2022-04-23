import { BadRequestException, Injectable, NotAcceptableException } from "@nestjs/common";
import { CommissionResource, CommissionResourceService, UserDirection } from "hf-narwhale-datasource-module";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class CommissionResourceControllerService {

    constructor(
        private commissionResourceService: CommissionResourceService,
        private httpService: HttpService
    ) {}

    public async getByIdCommission(idCommission: number): Promise<CommissionResource[]> {
        const commissionResourceList = await this.commissionResourceService.getByIdCommission(idCommission);
        return commissionResourceList;
    }
    
    public async getHtml(id: number): Promise<any> {
        const commissionResource = await this.commissionResourceService.getById(id);

        try {
            if (commissionResource) {
                const request = await this.httpService.get('https://cameranation.it/api/storage/images/2016/03/foto-bellissime-2.jpg').toPromise();    
                return request.data;
            }
            
            throw new BadRequestException();
        } catch {
            throw new NotAcceptableException();
        }
    }

    public async insert(idCommission: number, name: string, link: string, isPrivate: boolean, isReference: boolean): Promise<CommissionResource> {
        const commissionResource = new CommissionResource();
        commissionResource.idCommission = idCommission;
        commissionResource.name = name;
        commissionResource.link = link;
        commissionResource.private = isPrivate;
        commissionResource.reference = isReference;

        commissionResource.direction = isPrivate ? UserDirection.CREATOR_TO_CREATOR : UserDirection.CREATOR_TO_CUSTOMER;

        const insertedCommissionResource = await this.commissionResourceService.insertReturningEntity(commissionResource);
        return insertedCommissionResource;
    }

    public async update(id: number, name: string, link: string): Promise<CommissionResource> {
        const commissionResource = await this.commissionResourceService.getById(id);

        if (commissionResource) {
            commissionResource.name = name;
            commissionResource.link = link;
            const updatedCommissionResource = await this.commissionResourceService.updateReturningEntity(commissionResource);
            return updatedCommissionResource;
        }

       throw new BadRequestException();
    }

    public async updatePrivate(id: number, isPrivate: boolean): Promise<CommissionResource> {
        const commissionResource = await this.commissionResourceService.getById(id);

        if (commissionResource) {
            commissionResource.private = isPrivate;
            commissionResource.direction = isPrivate ? UserDirection.CREATOR_TO_CREATOR : UserDirection.CREATOR_TO_CUSTOMER;
            
            const updatedCommissionResource = await this.commissionResourceService.updateReturningEntity(commissionResource);
            return updatedCommissionResource;
        }

       throw new BadRequestException();
    }

    public async updateReference(id: number, isReference: boolean): Promise<CommissionResource> {
        const commissionResource = await this.commissionResourceService.getById(id);

        if (commissionResource) {
            commissionResource.reference = isReference;

            const updatedCommissionResource = await this.commissionResourceService.updateReturningEntity(commissionResource);
            return updatedCommissionResource;
        }

       throw new BadRequestException();
    }

    public async delete(id: number): Promise<void> {
        const commissionResource = await this.commissionResourceService.getById(id);

        if (commissionResource) {
            await this.commissionResourceService.deleteByEntity(commissionResource);
            return;
        }

        throw new BadRequestException();
    }
}