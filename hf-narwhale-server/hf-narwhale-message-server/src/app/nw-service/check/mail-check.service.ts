import { Injectable } from "@nestjs/common";
import { MessageType } from "hf-narwhale-message-module";
import { MessageCheckService } from "./check.service";

@Injectable()
export class MailMessageCheckService extends MessageCheckService {
    protected readonly type: MessageType = MessageType.EMAIL;
    
}