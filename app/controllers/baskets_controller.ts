import {HttpContext} from "@adonisjs/core/http";
import {inject} from "@adonisjs/core";
import {BasketService} from "#services/basket_service";

@inject()
export default class BasketsController {

  constructor(private basketService : BasketService) {
  }
  public async index({ response, auth }: HttpContext) {
    const {email} = await auth.getUserOrFail()
    const basket = await this.basketService.getBasket(email)
    return response.json(basket ? basket : [])
  }

  public async create({ request, response, auth }: HttpContext){
    const basket = await request.body()
    const {email} = await auth.getUserOrFail()
    const currentBasket = await this.basketService.create(email, basket)
    return response.ok(currentBasket)
  }

}
