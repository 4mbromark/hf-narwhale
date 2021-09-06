import { Injectable } from "@nestjs/common";
import { CacheKey, CacheService } from "hf-narwhale-cache-module";
import { Commission, CommissionService } from "hf-narwhale-datasource-module";

@Injectable()
export class CommissionControllerService {

    constructor(
        private commissionService: CommissionService,
        private cacheService: CacheService
    ) {}

    public async getWithFilters(): Promise<Commission[]> {
        const idCreator = await this.cacheService.getNumber(CacheKey.ID_CREATOR);
        const commissionList = await this.commissionService.getByIdCreator(idCreator);
        return commissionList;
    }
}