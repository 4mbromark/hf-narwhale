import { MessageHeader } from './../nw-object/message-header';
import { Injectable, Logger } from "@nestjs/common";
import { Message, MessageSender, MessageService, MessageTemplate, MessageTrace, MessageTraceService, MessageType } from "hf-narwhale-message-data";
import { HighFiveObjectUtil } from 'hf-common-module';

@Injectable()
export class MessageSenderService {
    private readonly logger = new Logger(MessageSenderService.name);

    constructor(
        private readonly messageService: MessageService,
        private readonly messageTraceService: MessageTraceService
    ) {}

    public async newMessage(header: MessageHeader): Promise<void> {
        return new Promise(async (resolve, reject) => {
            if (
                HighFiveObjectUtil.isNull(header) ||
                HighFiveObjectUtil.isNullOrEmpty(header.sender) ||
                HighFiveObjectUtil.isNullOrEmpty(header.template)
            ) {
                this.logger.log('Creating message failed: header is not valid');
                reject('message header is not valid');
            }

            if (header.recipients.length === 0) {
                this.logger.log('Creating message failed: no recipients');
                reject('no recipients for message');

                for (let recipient of header.recipients) {
                    if (
                        HighFiveObjectUtil.isNull(recipient) ||
                        HighFiveObjectUtil.isNullOrEmpty(recipient.type) ||
                        HighFiveObjectUtil.isNullOrEmpty(recipient.to)
                    ) {
                        this.logger.log('Creating message failed: invalid recipient');
                        reject('invalid recipient detected');
                    }
                }
            }

            this.createMessage(header.idUser, header.sender, header.template, header.content).then(async (message: Message) => {
                for (let recipient of header.recipients) {
                    await this.createMessageTrace(message.id, recipient.type, recipient.to);
                }

                this.logger.log('Message created: ' + message.id);
                resolve();
            }).catch((error) => {
                this.logger.error('Creating message failed: unknow error');
                this.logger.error(error);
                reject('unknow error creating message');
            });
        });
    }

    private async createMessage(idUser: number, sender: MessageSender, template: MessageTemplate, content: any): Promise<Message> {
        const message: Message = new Message();
        message.idUser = idUser;
        message.sender = sender;
        message.template = template;
        message.content = content;

        return await this.messageService.insertReturningEntity(message);
    } 

    private async createMessageTrace(idMessage: number, type: MessageType, to: string): Promise<MessageTrace> {
        const messageTrace: MessageTrace = new MessageTrace();
        messageTrace.idMessage = idMessage;
        messageTrace.type = type;
        messageTrace.to = to;
        
        return await this.messageTraceService.insertReturningEntity(messageTrace);
    }

    public async getMessageReport(): Promise<void> {

    }
}