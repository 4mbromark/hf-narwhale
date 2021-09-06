import { NarwhaleEnviromentModule } from 'hf-narwhale-enviroment-module';
import { HighFivePswdClient } from './client/pswd.client';
import { HighFiveAuthClient } from './client/auth.client';
import { CentralRegistryService } from './service/registry.service';
import { HttpModule, Module } from '@nestjs/common';
import { HighFiveUserClient } from './client/user.client';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        NarwhaleEnviromentModule,

        PassportModule,
        HttpModule.register({
            timeout: +process.env.HTTP_TIMEOUT,
            maxRedirects: +process.env.HTTP_MAX_REDIRECT,
            baseURL: process.env.REGISTRY_URL
        })
    ],
    providers: [
        CentralRegistryService,

        HighFiveUserClient,
        HighFivePswdClient,
        HighFiveAuthClient
    ],
    exports: [
        CentralRegistryService
    ]
})
export class NarwhaleCentralRegistryModule { }
