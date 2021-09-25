import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { CommissionActionControllerService } from "../nw-service/controller/commission-action-controller.service";

@Controller('/commission-action')
export class CommissionActionController {

    constructor(
        private commissionActionControllerService: CommissionActionControllerService
    ) {}

    @Get('/by-commission/:idCommission')
    public async getByCommission(@Param('idCommission') idCommission: number, @Res() res: Response) {
        const commissionActionList = await this.commissionActionControllerService.getByIdCommission(idCommission);
        if (commissionActionList) {
            res.status(HttpStatus.OK).send(commissionActionList);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }
}