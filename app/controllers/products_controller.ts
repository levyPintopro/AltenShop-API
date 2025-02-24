import { HttpContext } from '@adonisjs/core/http'
import { createProducts } from '#validators/product'
import { ProductService } from '#services/product_service'
import { isNotEmpty } from '../utils.js'
import { inject } from '@adonisjs/core'
import { UserService } from '#services/user_service'

@inject()
export default class ProductsController {
  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}

  public async indexAll({ response }: HttpContext) {
    const products = await this.productService.getAllProduct()
    return response.ok(products)
  }

  public async index({ response, params }: HttpContext) {
    const product = await this.productService.getProduct(params.productId)
    return response.ok(product)
  }
  public async create({ auth, request, response }: HttpContext) {
    await this.userService.isAdmin(auth.getUserOrFail().id)
    const newProductRequest = await request.validateUsing(createProducts)
    const userCreated = await this.productService.createProduct(newProductRequest)
    return response.ok(userCreated)
  }

  public async update({ auth, request, response, params }: HttpContext) {
    await this.userService.isAdmin(auth.getUserOrFail().id)
    const product = await this.productService.getProduct(params.productId)
    const updatedProductRequest = await request.body()
    const updatedProduct = await this.productService.updateProduct(
      isNotEmpty(product),
      updatedProductRequest
    )
    return response.ok(updatedProduct)
  }

  public async delete({ auth, response, params }: HttpContext) {
    await this.userService.isAdmin(auth.getUserOrFail().id)
    const product = await this.productService.getProduct(params.productId)
    return response.ok(await this.productService.deleteProduct(isNotEmpty(product)))
  }
}
