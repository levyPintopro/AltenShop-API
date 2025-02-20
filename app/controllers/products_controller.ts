// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { createProducts } from '#validators/product'
import { ProductService } from '#services/product_service'
import { isNotEmpty } from '../utils.js'
import { inject } from '@adonisjs/core'

@inject()
export default class ProductsController {
  constructor(private productService: ProductService) {}

  public async indexAll({ response }: HttpContext) {
    const products = await this.productService.getAllProduct()
    return response.json(products)
  }

  public async index({ response, params }: HttpContext) {
    const product = await this.productService.getProduct(params.productId)
    return response.ok(product)
  }
  public async create({ request, response }: HttpContext) {
    const newProductRequest = await request.validateUsing(createProducts)
    const newProduct = { ...newProductRequest }
    return response.ok(await this.productService.createProduct(newProduct))
  }

  public async update({ request, response, params }: HttpContext) {
    const product = await this.productService.getProduct(params.productId)
    const updatedProductRequest = await request.all()
    const updatedProduct = await this.productService.updateProduct(
      isNotEmpty(product),
      updatedProductRequest
    )
    return response.ok(updatedProduct)
  }

  public async delete({ response, params }: HttpContext) {
    const product = await this.productService.getProduct(params.productId)
    return response.ok(await this.productService.deleteProduct(isNotEmpty(product)))
  }
}
