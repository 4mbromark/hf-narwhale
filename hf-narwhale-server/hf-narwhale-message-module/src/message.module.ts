import { MessageSenderService } from './nw-service/message-sender.service';
import { Module } from '@nestjs/common';
import { NarwhaleMessageData } from 'hf-narwhale-message-data';

@Module({
    imports: [
        NarwhaleMessageData
    ],
    providers: [
        MessageSenderService
    ],
    exports: [
        MessageSenderService
    ]
})
export class NarwhaleMessageModule { }
