import { CacheService } from './service/cache.service';
import { CacheModule, Module } from '@nestjs/common';

@Module({
    imports: [
        CacheModule.register({
            ttl: 0
        })
    ],
    providers: [
        CacheService
    ],
    exports: [
        CacheService
    ]
})
export class NarwhaleCacheModule { }
