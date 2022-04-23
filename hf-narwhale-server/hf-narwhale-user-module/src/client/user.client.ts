import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { HighFiveUser } from "hf-ds-module";

@Injectable()
export class HighFiveUserClient {
    private URL = 'user';

    constructor(
        private httpService: HttpService
    ) { }

    public async exists(uid: string): Promise<HighFiveUser> {
        const config = {
            headers: {
                hfappname: process.env.HF_APP_NAME,
                hfapptoken: process.env.HF_APP_TOKEN
            }
        };

        const response = await this.httpService.post(this.URL + '/exists', { uid: uid }, config).toPromise();
        return response.data;
    }

    public async create(user: HighFiveUser): Promise<number> {
        const config = {
            headers: {
                hfappname: process.env.HF_APP_NAME,
                hfapptoken: process.env.HF_APP_TOKEN
            }
        };

        const response = await this.httpService.post(this.URL, { user: user }, config).toPromise();
        return response.data;
    }

    public async get(tk: string): Promise<HighFiveUser> {
        const config = {
            headers: {
                hfappname: process.env.HF_APP_NAME,
                hfapptoken: process.env.HF_APP_TOKEN,
                Authorization: `Bearer ` + tk
            }
        };

        const response = await this.httpService.get(this.URL, config).toPromise();
        return response.data;
    }

    public async getById(tk: string, id: number): Promise<HighFiveUser> {
        const config = {
            headers: {
                hfappname: process.env.HF_APP_NAME,
                hfapptoken: process.env.HF_APP_TOKEN,
                Authorization: `Bearer ` + tk
            }
        };

        const response = await this.httpService.get(this.URL + '/' + id, config).toPromise();
        return response.data;
    }
}