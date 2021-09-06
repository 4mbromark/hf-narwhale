import { CommissionControllerService } from './app/nw-service/controller/commission-controller.service';
import { UserControllerService } from './app/nw-service/controller/user-controller.service';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { HighFiveLoggerModule } from 'hf-logger-module';
import { NarwhaleDatasourceModule } from 'hf-narwhale-datasource-module';
import { NarwhaleEnviromentModule } from 'hf-narwhale-enviroment-module';
import { NarwhaleCentralRegistryModule } from 'hf-narwhale-registry-module';
import { AppController } from './app.controller';
import { JwtGuard } from './app/nw-auth/jwt-guard';
import { UserController } from './app/nw-controller/user.controller';
import { NarwhaleCacheModule } from 'hf-narwhale-cache-module';
import { CommissionController } from './app/nw-controller/commission.controller';

@Module({
  imports: [
    HighFiveLoggerModule,
    NarwhaleCentralRegistryModule,
    NarwhaleCacheModule,
    NarwhaleEnviromentModule,
    NarwhaleDatasourceModule
  ],
  controllers: [
    UserController,
    CommissionController,
    
    AppController
  ],
  providers: [
    UserControllerService,
    CommissionControllerService,

    /** JSONWEBTOKEN */
    {
      provide: APP_GUARD,
      useClass: JwtGuard
    },
  ],
})
export class AppModule { }
