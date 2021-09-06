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
        const response = await this.httpService.post(this.URL + '/exists', { uid: uid }).toPromise();
        return response.data;
    }

    public async create(user: HighFiveUser): Promise<number> {
        const response = await this.httpService.post(this.URL, { user: user }).toPromise();
        return response.data;
    }

    public async get(tk: string): Promise<HighFiveUser> {
        const config = {
            headers: { Authorization: `Bearer ` + tk }
        };

        const response = await this.httpService.get(this.URL, config).toPromise();
        return response.data;
    }
}