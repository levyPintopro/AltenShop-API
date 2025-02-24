import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code: string | unknown

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare image: string | unknown

  @column()
  declare category: string

  @column()
  declare price: number

  @column()
  declare quantity: number

  @column()
  declare internalReference: string | unknown

  @column()
  declare shellId: number

  @column()
  declare inventoryStatus: string

  @column()
  declare rating: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
