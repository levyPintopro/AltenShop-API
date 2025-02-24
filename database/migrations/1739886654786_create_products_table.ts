import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('code')
      table.string('name')
      table.string('description')
      table.string('image')
      table.string('category')
      table.integer('price')
      table.integer('quantity')
      table.string('internal_reference')
      table.integer('shell_id')
      table.string('inventory_status')
      table.decimal('rating')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
