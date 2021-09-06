import { CacheService } from './service/cache.service';
import { CacheModule, Module } from '@nestjs/common';

@Module({
    imports: [
        CacheModule.register()
    ],
    providers: [
        CacheService
    ],
    exports: [
        CacheService
    ]
})
export class NarwhaleCacheModule { }
