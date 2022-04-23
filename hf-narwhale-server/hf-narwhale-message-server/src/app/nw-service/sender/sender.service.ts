import { Message } from 'hf-narwhale-datasource-module';
import { MessageTrace } from 'hf-narwhale-datasource-module';
import { MessageStatus } from 'hf-narwhale-common-module';
import { MessageService, MessageTraceService } from 'hf-narwhale-datasource-module';
import { MessageType } from 'hf-narwhale-common-module';

export abstract class MessageSenderService {
    protected abstract readonly type: MessageType;

    constructor(
        protected readonly messageService: MessageService,
        protected readonly messageTraceService: MessageTraceService
    ) {}

    public async sendMessages(): Promise<void> {
        const messageTraceList = await this.messageTraceService.getByTypeStatusAndScheduledLessEqualThan(this.type, MessageStatus.READY, new Date());

        for (let readyMessage of messageTraceList) {
            const message = await this.messageTraceService.updateStatusReturningMessageTrace(readyMessage.id, readyMessage.status, MessageStatus.SENDING);

            // SEND

            const status: MessageStatus = MessageStatus.OK;

            const sentMessage = await this.messageTraceService.updateStatusSentReturningMessageTrace(message.id, status, '', new Date(), '');

            if (sentMessage.status === MessageStatus.ERROR) {
                await this.scheduleMessage(sentMessage);
            }
        }
    }

    private async scheduleMessage(errorMessageTrace: MessageTrace): Promise<MessageTrace> {
        const messageTrace = new MessageTrace();
        messageTrace.idMessage = errorMessageTrace.idMessage;
        messageTrace.type = errorMessageTrace.type;
        messageTrace.to = errorMessageTrace.to;
        messageTrace.status = MessageStatus.READY;
        messageTrace.attempt = errorMessageTrace.attempt + 1;
        messageTrace.scheduled = new Date(); // TODO

        return await this.messageTraceService.insertReturningEntity(messageTrace);
    }

    private async warnError(errorMessageTrace: MessageTrace): Promise<MessageTrace> {
        const messageTrace = new MessageTrace();
        return await this.messageTraceService.insertReturningEntity(messageTrace);
    }
}