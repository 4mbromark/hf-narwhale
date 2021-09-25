import { CacheKey } from 'hf-narwhale-cache-module';
import { CacheService } from 'hf-narwhale-cache-module';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CentralRegistryService } from 'hf-narwhale-registry-module';
import { HighFiveUser } from "hf-ds-module";
import { CreatorService, UserService } from 'hf-narwhale-datasource-module';

@Injectable()
export class UserControllerService {

    constructor(
        private centralRegistryService: CentralRegistryService,
    ) {}

    public async logIntoRegistry(uid: string, pswd: string): Promise<string> {
        const tk = await this.centralRegistryService.login(uid, pswd);
        return tk;
    }

    public async verifyWithRegistry(tk: string): Promise<HighFiveUser> {
        const user = await this.centralRegistryService.verifyToken(tk);
        return user;
    }
}