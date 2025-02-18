// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { createProducts } from '#validators/product'
import Product from '#models/product'

export default class ProductsController {
  public async getAll({ response }: HttpContext) {
    const products = await Product.all()
    return response.json({ data: products })
  }

  public async getProduct({ response, params }: HttpContext) {
    const product = await Product.find(params.productId)
    return response.json({ data: product })
  }
  public async createProduct({ request }: HttpContext) {
    const newProductRequest = await request.validateUsing(createProducts)
    const newProduct = { ...newProductRequest }
    return await Product.create(newProduct)
  }

  public async updateProduct({ request, response, params }: HttpContext) {
    const product = await Product.find(params.productId)
    const updatedProductRequest = await request.all()
    await product?.merge(updatedProductRequest).save()
    return response.json({ data: product })
  }
}
