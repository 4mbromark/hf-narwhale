import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { HighFiveUser } from "hf-ds-module";

@Injectable()
export class HighFivePswdClient {
    private URL = 'pswd';

    constructor(
        private httpService: HttpService
    ) { }

    public async add(idUser: number, pswd: string): Promise<void> {
        const config = {
            headers: {
                hfappname: process.env.HF_APP_NAME,
                hfapptoken: process.env.HF_APP_TOKEN
            }
        };

        await this.httpService.post(this.URL, { idUser: idUser, pswd: pswd }, config).toPromise();
    }

    public async change(oldPwsd: string, newPswd: string, tk: string): Promise<void> {
        const config = {
            headers: {
                hfappname: process.env.HF_APP_NAME,
                hfapptoken: process.env.HF_APP_TOKEN,
                Authorization: `Bearer ` + tk
            }
        };

        await this.httpService.post(this.URL, { oldPswd: oldPwsd, newPswd: newPswd }, config).toPromise();
    }
}