import { HighFiveUser } from 'hf-ds-module';
import { Injectable } from "@nestjs/common";
import { Creator, CreatorService } from "hf-narwhale-datasource-module";

@Injectable()
export class ControllerService {

    constructor(
        private creatorService: CreatorService
    ) {}

    public async getCreator(user: HighFiveUser): Promise<Creator> {
        const creator = await this.creatorService.getByIdRegistry(user.id);
        return creator;
    }

    public async getIdCreator(user: HighFiveUser): Promise<number> {
        const creator = await this.getCreator(user);
        return creator.id;
    }
}