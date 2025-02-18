import vine from '@vinejs/vine'

export const createProducts = vine.compile(
  vine.object({
    code: vine.string(),
    name: vine.string(),
    description: vine.string(),
    image: vine.string(),
    category: vine.string(),
    price: vine.number(),
    quantity: vine.number(),
    internalReference: vine.string(),
    shellId: vine.number(),
    inventoryStatus: vine.string(),
    rating: vine.number(),
  })
)
