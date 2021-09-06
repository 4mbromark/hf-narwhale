import { CacheKey } from 'hf-narwhale-cache-module';
import { CacheService } from 'hf-narwhale-cache-module';
import { Injectable } from "@nestjs/common";
import { CentralRegistryService } from 'hf-narwhale-registry-module';
import { HighFiveUser } from "hf-ds-module";
import { CreatorService, UserService } from 'hf-narwhale-datasource-module';

@Injectable()
export class UserControllerService {

    constructor(
        private centralRegistryService: CentralRegistryService,
        private userService: UserService,
        private creatorService: CreatorService,
        private cacheService: CacheService
    ) {}

    public async logIntoRegistry(uid: string, pswd: string): Promise<string> {
        const tk = await this.centralRegistryService.login(uid, pswd);
        return tk;
    }

    public async verifyWithRegistry(tk: string): Promise<HighFiveUser> {
        const user = await this.centralRegistryService.verifyToken(tk);
        await this.setIdCreator(user.id);
        return user;
    }

    private async setIdCreator(idUser: number): Promise<void> {
        const user = await this.userService.getByIdRegistry(idUser);
        const creator = await this.creatorService.getByIdUser(user.id);
        this.cacheService.set(CacheKey.ID_CREATOR, creator.id as unknown as string);
    }
}