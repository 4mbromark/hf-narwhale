import { MessageSchedulerService } from './app/nw-service/scheduler/message-scheduler.service';
import { MessageTraceDao } from './app/nw-database/dao/message-trace.dao';
import { MessageDao } from './app/nw-database/dao/message.dao';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HighFiveEnvironmentModule } from 'hf-env-module';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighFiveDatabaseModule } from 'hf-database-module';
import { MessageService } from './app/nw-database/service/message.service';
import { MessageTraceService } from './app/nw-database/service/message-trace.service';
import { MessageSender } from 'hf-narwhale-message-module';
import { MessageTrace } from './app/nw-database/entity/message-trace.entity';
import { Message } from './app/nw-database/entity/message.entity';
import { MessageScheduler } from './app/nw-scheduler/message.scheduler';

@Module({
  imports: [
    HighFiveEnvironmentModule,
    HighFiveDatabaseModule,

    ScheduleModule.forRoot(),

    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: +process.env.MAIL_PORT,
        secure: true
      },
      transports: {
        [MessageSender.HEADQUARTERS]: {
          auth: {
            user: process.env.MAIL_HQR_AUTH_USER,
            pass: process.env.MAIL_HQR_AUTH_PSWD,
          }
        },
        [MessageSender.RED_SPACE_MONKEY]: {
          auth: {
            user: process.env.MAIL_RSM_AUTH_USER,
            pass: process.env.MAIL_RSM_AUTH_PSWD,
          }
        },
        [MessageSender.GHERKINS]: {
          auth: {
            user: process.env.MAIL_GHN_AUTH_USER,
            pass: process.env.MAIL_GHN_AUTH_PSWD,
          }
        },
        [MessageSender.EXPLOSIONS]: {
          auth: {
            user: process.env.MAIL_EXP_AUTH_USER,
            pass: process.env.MAIL_EXP_AUTH_PSWD,
          }
        },
      }
    })
  ],
  controllers: [],
  providers: [
    /** SCHEDULER */
    MessageScheduler,

    /** SCHEDULER SERVICES */
    MessageSchedulerService
  ],
})
export class AppModule { }
