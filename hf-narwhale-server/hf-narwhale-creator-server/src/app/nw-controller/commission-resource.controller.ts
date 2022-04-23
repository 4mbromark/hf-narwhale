import { CommissionResourceControllerService } from './../nw-service/controller/commission-resource-controller.service';
import { Body, Controller, Delete, Get, HttpStatus, InternalServerErrorException, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';

@Controller('/commission-resource')
export class CommissionResourceController {

    constructor(
        private commissionResourceControllerService: CommissionResourceControllerService
    ) {}

    @Get('/by-commission/:idCommission')
    public async getByCommission(@Param('idCommission') idCommission: number, @Res() res: Response) {
        const commissionResourceList = await this.commissionResourceControllerService.getByIdCommission(idCommission);
        if (commissionResourceList) {
            res.status(HttpStatus.OK).send(commissionResourceList);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Get('/html/:id')
    public async getHtml(@Param('id') id: number, @Res() res: Response) {
        const html = await this.commissionResourceControllerService.getHtml(id);
        if (html) {
            res.status(HttpStatus.OK).send(html);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put('/:idCommission')
    public async insert(@Param('idCommission') idCommission: number, @Body() body: any, @Res() res: Response) {
        const { name, link, isPrivate, isReference } = body;

        const insertedCommissionResource = await this.commissionResourceControllerService.insert(idCommission, name, link, isPrivate, isReference);
        if (insertedCommissionResource) {
            res.status(HttpStatus.OK).send(insertedCommissionResource);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put('/update/:id')
    public async update(@Param('id') id: number, @Body() body: any,  @Res() res: Response) {
        const { name, link } = body;

        const updatedCommissionResource = await this.commissionResourceControllerService.update(id, name, link);
        if (updatedCommissionResource) {
            res.status(HttpStatus.OK).send(updatedCommissionResource);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put('/update/private/:id')
    public async updatePrivate(@Param('id') id: number, @Body() body: any,  @Res() res: Response) {
        const { isPrivate } = body;

        const updatedCommissionResource = await this.commissionResourceControllerService.updatePrivate(id, isPrivate);
        if (updatedCommissionResource) {
            res.status(HttpStatus.OK).send(updatedCommissionResource);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put('/update/reference/:id')
    public async updateReference(@Param('id') id: number, @Body() body: any,  @Res() res: Response) {
        const { isReference } = body;

        const updatedCommissionResource = await this.commissionResourceControllerService.updateReference(id, isReference);
        if (updatedCommissionResource) {
            res.status(HttpStatus.OK).send(updatedCommissionResource);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Delete('/:id')
    public async delete(@Param('id') id: number, @Res() res: Response) {
        await this.commissionResourceControllerService.delete(id);
        res.status(HttpStatus.OK).send();
    }
}