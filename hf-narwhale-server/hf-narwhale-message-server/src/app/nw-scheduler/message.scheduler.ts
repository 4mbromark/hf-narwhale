import { MessageSchedulerService } from '../nw-service/scheduler/message-scheduler.service';
import { Injectable } from "@nestjs/common";
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MessageScheduler {

    constructor(
        private readonly messageSchedulerService: MessageSchedulerService
    ) {}

    @Cron(process.env.APP_CRON)
    public async scheduler(): Promise<void> {
        try {
            await this.messageSchedulerService.checkContent();

            await this.messageSchedulerService.sendMessages();
        } catch (e) {

        }
    }
}