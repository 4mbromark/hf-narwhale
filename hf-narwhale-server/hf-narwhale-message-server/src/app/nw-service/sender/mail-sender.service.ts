import { Injectable } from "@nestjs/common";
import { MessageType } from "hf-narwhale-message-module";
import { MessageSenderService } from "./sender.service";

@Injectable()
export class MailMessageSenderService extends MessageSenderService {
    protected readonly type: MessageType = MessageType.EMAIL;
    
}