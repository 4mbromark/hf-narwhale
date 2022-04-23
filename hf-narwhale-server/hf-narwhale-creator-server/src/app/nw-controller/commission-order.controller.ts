import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { CommissionOrderControllerService } from '../nw-service/controller/commission-order-controller.service';

@Controller('/commission-order')
export class CommissionOrderController {

    constructor(
        private commissionOrderControllerService: CommissionOrderControllerService
    ) {}

    @Get('/by-commission/:idCommission')
    public async getByCommission(@Param('idCommission') idCommission: number, @Res() res: Response) {
        const commissionOrderList = await this.commissionOrderControllerService.getByIdCommission(idCommission);
        if (commissionOrderList) {
            res.status(HttpStatus.OK).send(commissionOrderList);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put('/:idCommission')
    public async insert(@Param('idCommission') idCommission: number, @Body() body: any, @Res() res: Response) {
        const { deadline, payment, paymentAdvance } = body;

        const insertedCommissionResource = await this.commissionOrderControllerService.insert(idCommission, deadline, payment, paymentAdvance);
        if (insertedCommissionResource) {
            res.status(HttpStatus.OK).send(insertedCommissionResource);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }
}