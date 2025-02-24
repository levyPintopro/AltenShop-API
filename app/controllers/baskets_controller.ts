// import type { HttpContext } from '@adonisjs/core/http'

import {HttpContext} from "@adonisjs/core/http";
import redis from "@adonisjs/redis/services/main";

export default class BasketsController {

  public async index({ response, auth }: HttpContext) {
    const {email} = await auth.getUserOrFail()
    const basket = await redis.get(email)
    return response.json(basket ? JSON.parse(basket) : [])

  }

  public async create({ request, response, auth }: HttpContext){
    const basket = await request.body()
    const {email} = await auth.getUserOrFail()
    await redis.set(email, JSON.stringify(basket))
    return response.ok("Basket created")
  }
}
