import { ControllerService } from './app/nw-service/controller.service';
import { CommissionActionControllerService } from './app/nw-service/controller/commission-action-controller.service';
import { CommissionActionController } from './app/nw-controller/commission-action.controller';
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
import { NarwhaleCommonModule } from 'hf-narwhale-common-module';

@Module({
  imports: [
    HighFiveLoggerModule,
    NarwhaleCommonModule,
    NarwhaleCentralRegistryModule,
    // NarwhaleCacheModule,
    NarwhaleEnviromentModule,
    NarwhaleDatasourceModule
  ],
  controllers: [
    UserController,
    CommissionController,
    CommissionActionController,
    
    AppController
  ],
  providers: [
    ControllerService,

    UserControllerService,
    CommissionControllerService,
    CommissionActionControllerService,

    /** JSONWEBTOKEN */
    {
      provide: APP_GUARD,
      useClass: JwtGuard
    },
  ],
})
export class AppModule { }
