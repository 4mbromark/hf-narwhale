import { ControllerService } from './../nw-service/controller.service';
import { HighFiveUser } from 'hf-ds-module';
import { BadRequestException, Body, Controller, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { CommissionControllerService } from '../nw-service/controller/commission-controller.service';
import { LoggedUser, ProvidedToken } from '../nw-auth/jwt-user';
import { HighFiveObjectUtil } from 'hf-common-module';
import { CommissionStatus } from 'hf-narwhale-datasource-module';

@Controller('/commission')
export class CommissionController {

    constructor(
        private commissionControllerService: CommissionControllerService, 
        private controllerService: ControllerService
    ) {}

    @Post()
    public async getWithFilters(@LoggedUser() user: HighFiveUser, @ProvidedToken() tk: string, @Body() body: any, @Res() res: Response) {
        const idCreator = await this.controllerService.getIdCreator(user);
        const { } = body;

        const commissionList = await this.commissionControllerService.getWithFilters(idCreator, tk);
        if (commissionList) {
            res.status(HttpStatus.OK).send(commissionList);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put()
    public async insert(@LoggedUser() user: HighFiveUser, @Body() body: any, @Res() res: Response) {
        const idCreator = await this.controllerService.getIdCreator(user);
        const { type, title, description } = body;

        const insertedCommission = await this.commissionControllerService.insert(idCreator, type, title, description);
        if (insertedCommission) {
            res.status(HttpStatus.OK).send(insertedCommission);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put('/update/status/:id')
    public async updateStatus(@Param('id') id: number, @Body() body: any, @Res() res: Response) {
        const { status } = body;

        if (HighFiveObjectUtil.isNull(id) || HighFiveObjectUtil.isNotNumber(id)) {
            throw new BadRequestException('commission id is null or is not valid: ' + id);
        }

        if (HighFiveObjectUtil.isNull(status) || !Object.values(CommissionStatus).includes(status)) {
            throw new BadRequestException('provided status is null or is not valid: ' + status);
        }

        const updatedCommission = await this.commissionControllerService.updateStatus(id, status);
        const httpStatus = updatedCommission ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR;
        res.status(httpStatus).send(updatedCommission);
    }

    @Put('/update/priority/:id')
    public async updatePriority(@LoggedUser() user: HighFiveUser, @Param('id') id: number, @Body() body: any, @Res() res: Response) {
        const { priority } = body;

        const insertedCommission = await this.commissionControllerService.updatePriority(id, priority);
        if (insertedCommission) {
            res.status(HttpStatus.OK).send(insertedCommission);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }
}