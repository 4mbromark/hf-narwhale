import { MessageSender, MessageTemplate, MessageType } from "hf-narwhale-message-data"

export class MessageHeader {
    idUser?: number;
    sender: MessageSender;
    template: MessageTemplate;
    content?: any;

    recipients: { type: MessageType, to: string }[];
}