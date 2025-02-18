import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('code').notNullable()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('image').notNullable()
      table.string('category').notNullable()
      table.decimal('price').notNullable()
      table.integer('quantity').notNullable()
      table.string('internal_reference').notNullable()
      table.integer('shell_id').notNullable()
      table.string('inventory_status').notNullable()
      table.decimal('rating').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
