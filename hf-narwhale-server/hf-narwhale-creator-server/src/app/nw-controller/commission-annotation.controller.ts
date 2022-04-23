import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { CommissionAnnotationControllerService } from "../nw-service/controller/commission-annotation-controller.service";

@Controller('/commission-annotation')
export class CommissionAnnotationController {

    constructor(
        private commissionAnnotationControllerService: CommissionAnnotationControllerService
    ) {}

    @Get('/by-commission/:idCommission')
    public async getByCommission(@Param('idCommission') idCommission: number, @Res() res: Response) {
        const commissionAnnotationList = await this.commissionAnnotationControllerService.getByIdCommission(idCommission);
        if (commissionAnnotationList) {
            res.status(HttpStatus.OK).send(commissionAnnotationList);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put('/:idCommission')
    public async insert(@Param('idCommission') idCommission: number, @Body() body: any, @Res() res: Response) {
        const { text } = body;

        const insertedCommissionAnnotation = await this.commissionAnnotationControllerService.insert(idCommission, text);
        if (insertedCommissionAnnotation) {
            res.status(HttpStatus.OK).send(insertedCommissionAnnotation);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Put('/update/:id')
    public async update(@Param('id') id: number, @Body() body: any,  @Res() res: Response) {
        const { text } = body;

        const updatedCommissionAnnotation = await this.commissionAnnotationControllerService.update(id, text);
        if (updatedCommissionAnnotation) {
            res.status(HttpStatus.OK).send(updatedCommissionAnnotation);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        } 
    }

    @Delete('/:id')
    public async delete(@Param('id') id: number, @Res() res: Response) {
        await this.commissionAnnotationControllerService.delete(id);
        res.status(HttpStatus.OK).send();
    }
}