import { UserControllerService } from './../nw-service/controller/user-controller.service';
import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Public } from '../nw-auth/jwt-public';
import { Response } from 'express';

@Controller('/user')
export class UserController {

    constructor(
        private userControllerService: UserControllerService
    ) {}

    @Public()
    @Post('/login')
    public async login(@Body() body: any, @Res() res: Response) {
        const { uid, pswd } = body;

        const tk = await this.userControllerService.logIntoRegistry(uid, pswd);
        if (tk) {
            res.status(HttpStatus.OK).send(tk);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }

    @Public()
    @Post('/verify')
    public async verify(@Body() body: any, @Res() res: Response) {
        const { tk } = body;

        const user = await this.userControllerService.verifyWithRegistry(tk);
        if (user) {
            res.status(HttpStatus.OK).send(user);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }
}