import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { HighFiveUser } from "hf-ds-module";

@Injectable()
export class HighFiveAuthClient {
    private URL = 'auth';

    constructor(
        private httpService: HttpService
    ) { }

    public async login(uid: string, pswd: string): Promise<string> {
        const response = await this.httpService.post(this.URL, { uid: uid, pswd: pswd }).toPromise();
        return response.data;
    }

    public async verify(tk: string): Promise<HighFiveUser> {
        const response = await this.httpService.post(this.URL + '/verify', { tk: tk }).toPromise();
        return response.data;
    }
}