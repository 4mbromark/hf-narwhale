import { Injectable } from "@nestjs/common";
import { MessageCheckService } from "../check/check.service";
import { MessageSenderService } from "../sender/sender.service";

@Injectable()
export class MessageSchedulerService {

    constructor(
        private readonly messageCheckServices: MessageCheckService[],
        private readonly messageSenderServices: MessageSenderService[]
    ) {}

    public async checkContent(): Promise<void> {
        for (let messageCheckService of this.messageCheckServices) {
            messageCheckService.checkMessages();
        }
    }

    public async sendMessages(): Promise<void> {
        for (let messageSenderService of this.messageSenderServices) {
            messageSenderService.sendMessages();
        }
    }
}