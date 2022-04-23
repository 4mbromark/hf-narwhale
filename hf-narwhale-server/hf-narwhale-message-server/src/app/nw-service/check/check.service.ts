import { Injectable } from "@nestjs/common";
import { MessageType, MessageStatus } from "hf-narwhale-message-module";
import { MessageTraceService } from "src/app/nw-database/service/message-trace.service";

@Injectable()
export abstract class MessageCheckService {
    protected abstract readonly type: MessageType;

    constructor(
        private readonly messageTraceService: MessageTraceService 
    ) {}

    public async checkMessages(): Promise<void> {
        const messageTraceList = await this.messageTraceService.getByTypeAndStatus(this.type, MessageStatus.WAITING);

        for (let message of messageTraceList) {
            const checkingMessage = await this.messageTraceService.updateStatusReturningMessageTrace(message.id, MessageStatus.WAITING, MessageStatus.CHECKING);

            // Check TODO

            const status: MessageStatus = MessageStatus.READY;

            if (status === MessageStatus.READY) {
                const readyMessage = await this.messageTraceService.updateStatusScheduledReturningMessageTrace(checkingMessage.id, new Date());
            } else {
                const refusedMessage = await this.messageTraceService.updateStatusReturningMessageTrace(checkingMessage.id, checkingMessage.status, MessageStatus.REFUSED);
            }
        }
    }

    
}