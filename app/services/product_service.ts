import Product from '#models/product'
import { ModelAttributes } from '@adonisjs/lucid/types/model'

export class ProductService {
  public async getAllProduct() {
    const products = await Product.all()
    return products
  }

  public async getProduct(productId: number) {
    const product = await Product.find(productId)
    return product
  }
  public async createProduct(newProduct: Partial<ModelAttributes<Product>>) {
    return await Product.create(newProduct)
  }

  public async updateProduct(product: Product, updatedProduct: Partial<ModelAttributes<Product>>) {
    return await product?.merge(updatedProduct).save()
  }

  public async deleteProduct(product: Product) {
    return await product?.delete()
  }
}
