import { CommissionActionCollectiveService } from './app/nw-service/collective/commission-action-collective.service';
import { CustomerCollectiveService } from './app/nw-service/collective/customer-collective.service';
import { CustomerControllerService } from './app/nw-service/controller/customer-controller.service';
import { CommissionOrderController } from './app/nw-controller/commission-order.controller';
import { CommissionResourceControllerService } from './app/nw-service/controller/commission-resource-controller.service';
import { CommissionAnnotationController } from './app/nw-controller/commission-annotation.controller';
import { CommissionAnnotationControllerService } from './app/nw-service/controller/commission-annotation-controller.service';
import { ControllerService } from './app/nw-service/controller.service';
import { CommissionActionControllerService } from './app/nw-service/controller/commission-action-controller.service';
import { CommissionActionController } from './app/nw-controller/commission-action.controller';
import { CommissionControllerService } from './app/nw-service/controller/commission-controller.service';
import { HttpModule, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { HighFiveLoggerModule } from 'hf-logger-module';
import { NarwhaleDatasourceModule } from 'hf-narwhale-datasource-module';
import { AppController } from './app.controller';
import { JwtGuard } from './app/nw-auth/jwt-guard';
import { CommissionController } from './app/nw-controller/commission.controller';
import { CommissionResourceController } from './app/nw-controller/commission-resource.controller';
import { CommissionOrderControllerService } from './app/nw-service/controller/commission-order-controller.service';
import { CustomerController } from './app/nw-controller/customer.controller';
import { HighFiveEnvironmentModule } from 'hf-env-module';
import { NarwhaleCentralRegistryModule } from 'hf-narwhale-registry-module';

@Module({
  imports: [
    HighFiveEnvironmentModule,
    HighFiveLoggerModule,
    // NarwhaleCommonModule,
    NarwhaleCentralRegistryModule,
    // NarwhaleCacheModule,
    // NarwhaleEnviromentModule,
    NarwhaleDatasourceModule,

    HttpModule.register({
      timeout: +process.env.HTTP_TIMEOUT,
      maxRedirects: +process.env.HTTP_MAX_REDIRECT,
      baseURL: ''
    })
  ],
  controllers: [
    CustomerController,
    CommissionController,
    CommissionActionController,
    CommissionAnnotationController,
    // CommissionMessageController,
    CommissionResourceController,
    CommissionOrderController,
    
    AppController
  ],
  providers: [
    // CommonService,
    ControllerService,

    CustomerControllerService,
    CommissionControllerService,
    CommissionActionControllerService,
    CommissionAnnotationControllerService,
    // CommissionMessageControllerService,
    CommissionResourceControllerService,
    CommissionOrderControllerService,

    CustomerCollectiveService,
    CommissionActionCollectiveService,
    // CommissionOrderCollectiveService,

    /** JSONWEBTOKEN */
    {
      provide: APP_GUARD,
      useClass: JwtGuard
    },
  ],
})
export class AppModule { }
