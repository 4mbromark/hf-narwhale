import { All, Controller, Get, Res } from '@nestjs/common';
import { Public } from './app/nw-auth/jwt-public';
import { Response } from 'express';
import * as path from "path";


@Controller()
export class AppController {

    @Public()
    @All()
    redirectToAngular(@Res() res: Response) {
      res.sendFile(path.resolve('../hf-narwhale-creator-client/dist/hf-narwhale-creator-client/index.html'));
    }
}
