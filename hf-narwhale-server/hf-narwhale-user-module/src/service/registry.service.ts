import { HighFiveUser } from 'hf-ds-module';
import { HighFiveAuthClient } from '../client/auth.client';
import { HighFivePswdClient } from '../client/pswd.client';
import { Injectable } from "@nestjs/common";
import { HighFiveUserClient } from "../client/user.client";
import { ExtractJwt } from "passport-jwt";

@Injectable()
export class CentralRegistryService {
    
    constructor(
        private userClient: HighFiveUserClient,
        private pswdClient: HighFivePswdClient,
        private authClient: HighFiveAuthClient
    ) { }

    public async registerUser(user: HighFiveUser, pswd: string): Promise<void> {
        const id = await this.userClient.create(user);

        if (id) {
            await this.pswdClient.add(id, pswd);
        }
    }

    public async checkIfUserExists(uid: string): Promise<HighFiveUser> {
        const user = await this.userClient.exists(uid);
        return user;
    }

    public async getUser(ptk?: string, id?: number): Promise<HighFiveUser> {
        const tk = ptk || await this.getTokenFromAuthHeader();
        const user = id ? await this.userClient.getById(tk, id) : await this.userClient.get(tk);
        return user;
    }

    public async login(uid: string, pswd: string): Promise<string> {
        const tk = await this.authClient.login(uid, pswd);
        return tk;
    }

    public async verifyToken(ptk?: string): Promise<HighFiveUser> {
        const tk = ptk || await this.getTokenFromAuthHeader();
        const user = await this.authClient.verify(tk);
        return user;
    }

    public async changePassword(oldPswd: string, newPswd: string): Promise<void> {
        const tk = await this.getTokenFromAuthHeader();
        await this.pswdClient.change(oldPswd, newPswd, tk);
    }

    private async getTokenFromAuthHeader() {
        // TODO not working
        const tk = await ExtractJwt.fromAuthHeaderAsBearerToken();
        return tk;
    }
}