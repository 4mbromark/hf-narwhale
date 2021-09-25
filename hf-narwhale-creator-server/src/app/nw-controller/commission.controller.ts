import { ControllerService } from './../nw-service/controller.service';
import { HighFiveUser } from 'hf-ds-module';
import { Body, Controller, HttpStatus, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { CommissionControllerService } from '../nw-service/controller/commission-controller.service';
import { LoggedUser } from '../nw-auth/jwt-user';

@Controller('/commission')
export class CommissionController {

    constructor(
        private commissionControllerService: CommissionControllerService, 
        private controllerService: ControllerService
    ) {}

    @Post()
    public async getWithFilters(@LoggedUser() user: HighFiveUser, @Body() body: any, @Res() res: Response) {
        const idCreator = await this.controllerService.getIdCreator(user);
        const { } = body;

        const commissionList = await this.commissionControllerService.getWithFilters(idCreator);
        if (commissionList) {
            res.status(HttpStatus.OK).send(commissionList);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put()
    public async insert(@LoggedUser() user: HighFiveUser, @Body() body: any, @Res() res: Response) {
        const idCreator = await this.controllerService.getIdCreator(user);
        const { type, commission, status } = body;

        const commissionId = await this.commissionControllerService.insertCommissionData(idCreator, type, commission, status);
        if (commissionId) {
            res.status(HttpStatus.OK).send();
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }
}