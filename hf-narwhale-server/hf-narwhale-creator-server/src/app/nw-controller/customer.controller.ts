import { CustomerControllerService } from './../nw-service/controller/customer-controller.service';
import { ControllerService } from './../nw-service/controller.service';
import { HighFiveUser } from 'hf-ds-module';
import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { LoggedUser, ProvidedToken } from '../nw-auth/jwt-user';

@Controller('/customer')
export class CustomerController {

    constructor(
        private customerControllerService: CustomerControllerService, 
        private controllerService: ControllerService
    ) {}

    @Get('/user/:id')
    public async getUserById(@LoggedUser() user: HighFiveUser, @ProvidedToken() tk: string, @Param('id') id: number, @Body() body: any, @Res() res: Response) {
        const idCreator = await this.controllerService.getIdCreator(user);

        const creatorUser = await this.customerControllerService.getUserByIdCustomerAndIsp(id, idCreator, tk);
        if (creatorUser) {
            res.status(HttpStatus.OK).send(creatorUser);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Get('/user/by-commission/:idCommission')
    public async getUserByIdCommission(@LoggedUser() user: HighFiveUser, @ProvidedToken() tk: string, @Param('idCommission') idCommission: number, @Body() body: any, @Res() res: Response) {
        const idCreator = await this.controllerService.getIdCreator(user);

        const creatorUser = await this.customerControllerService.getUserByIdCommissionAndIsp(idCommission, idCreator, tk);
        res.status(HttpStatus.OK).send(creatorUser);
    }
}