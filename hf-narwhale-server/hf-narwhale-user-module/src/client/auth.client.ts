import { HttpService } from "@nestjs/axios";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { HighFiveUser } from "hf-ds-module";

@Injectable()
export class HighFiveAuthClient {
    private URL = 'auth';

    constructor(
        private httpService: HttpService
    ) { }

    public async login(uid: string, pswd: string): Promise<string> {
        const config = {
            headers: {
                hfappname: process.env.HF_APP_NAME,
                hfapptoken: process.env.HF_APP_TOKEN
            }
        };

        const response = await this.httpService.post(this.URL, { uid: uid, pswd: pswd }, config).toPromise();
        return response.data;
    }

    public async verify(tk: string): Promise<HighFiveUser> {
        const config = {
            headers: {
                hfappname: process.env.HF_APP_NAME,
                hfapptoken: process.env.HF_APP_TOKEN
            }
        };

        const response = await this.httpService.post(this.URL + '/verify', { tk: tk }, config).toPromise().catch(
            (error: any) => {
                if (error.response.status === 401) {
                    throw new UnauthorizedException();
                }
                throw error;
            }
        );
        return response.data;
    }
}