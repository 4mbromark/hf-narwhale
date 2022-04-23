import { BadRequestException, Injectable } from "@nestjs/common";
import { CommissionAnnotation, CommissionAnnotationService } from "hf-narwhale-datasource-module";

@Injectable()
export class CommissionAnnotationControllerService {

    constructor(
        private commissionAnnotationService: CommissionAnnotationService
    ) {}

    public async getByIdCommission(idCommission: number): Promise<CommissionAnnotation[]> {
        const commissionAnnotationList = await this.commissionAnnotationService.getByIdCommission(idCommission);
        return commissionAnnotationList;
    }

    public async insert(idCommission: number, text: string): Promise<CommissionAnnotation> {
        const commissionAnnotation = new CommissionAnnotation();
        commissionAnnotation.idCommission = idCommission;
        commissionAnnotation.text = text;

        const insertedCommissionAnnotation = await this.commissionAnnotationService.insertReturningEntity(commissionAnnotation);
        return insertedCommissionAnnotation;
    }

    public async update(id: number, text: string): Promise<CommissionAnnotation> {
        const commissionAnnotation = await this.commissionAnnotationService.getById(id);

        if (commissionAnnotation) {
            commissionAnnotation.text = text;
            const updatedCommissionAnnotation = await this.commissionAnnotationService.updateReturningEntity(commissionAnnotation);
            return updatedCommissionAnnotation;
        }

       throw new BadRequestException();
    }

    public async delete(id: number): Promise<void> {
        const commissionAnnotation = await this.commissionAnnotationService.getById(id);

        if (commissionAnnotation) {
            await this.commissionAnnotationService.deleteByEntity(commissionAnnotation);
            return;
        }

        throw new BadRequestException();
    }
}