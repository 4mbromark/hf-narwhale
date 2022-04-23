import { AuthGuard } from '@nestjs/passport';
import { CentralRegistryService } from 'hf-narwhale-registry-module';
import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "./jwt-public";

@Injectable()
export class JwtGuard extends AuthGuard() {

    constructor(
        private reflector: Reflector,
        private centralRegistryService: CentralRegistryService
    ) {
        super();
    }

    async canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        // TODO
        const request = context.switchToHttp().getRequest();
        const { headers } = request;
        const tk = headers.authorization.split(' ')[1];

        // const tk = ExtractJwt.fromAuthHeaderAsBearerToken();
        const user = await this.centralRegistryService.verifyToken(tk);
        request.user = user;
        return user ? true : false;
    }
}