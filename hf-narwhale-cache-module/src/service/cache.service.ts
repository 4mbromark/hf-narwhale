import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { CacheKey } from "../enum/cache-key";

@Injectable()
export class CacheService {

    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}

    public async get(key: CacheKey): Promise<unknown> {
        const value = await this.cacheManager.get(key);
        return value;
    }

    public async getNumber(key: CacheKey): Promise<number> {
        const value = await this.get(key);
        return +value;
    }

    public async set(key: CacheKey, value: string): Promise<void> {
        await this.cacheManager.set(key, value);
    }

    public async setWithExpiration(key: CacheKey, value: string, expiration: number): Promise<void> {
        await this.cacheManager.set(key, value, { ttl: expiration });
    }

    public async setWithNoExpiration(key: CacheKey, value: string): Promise<void> {
        await this.setWithExpiration(key, value, 0);
    }

    public async delete(key: CacheKey): Promise<void> {
        await this.cacheManager.del(key);
    }

    public async reset(): Promise<void> {
        await this.cacheManager.reset();
    }
}