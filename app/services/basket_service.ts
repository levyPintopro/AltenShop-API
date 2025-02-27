import redis from "@adonisjs/redis/services/main";

export class BasketService {

  public async create(email:string , basket: any){
    await redis.set(email, JSON.stringify(basket))
    return await redis.get(email)
  }

  public async getBasket(email: string){
    return await redis.get(email)
  }
}
