import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from 'express';
import { CommissionControllerService } from '../nw-service/controller/commission-controller.service';

@Controller('/commission')
export class CommissionController {

    constructor(
        private commissionControllerService: CommissionControllerService
    ) {}

    @Post()
    public async getWithFilters(@Body() body: any, @Res() res: Response) {
        const { } = body;

        const commissionList = await this.commissionControllerService.getWithFilters();
        if (commissionList) {
            res.status(HttpStatus.OK).send(commissionList);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }
}