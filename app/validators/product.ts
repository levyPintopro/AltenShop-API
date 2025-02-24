import vine from '@vinejs/vine'

export const createProducts = vine.compile(
  vine.object({
    code: vine.string().nullable(),
    name: vine.string(),
    description: vine.string(),
    image: vine.string().nullable(),
    category: vine.string(),
    price: vine.number(),
    quantity: vine.number(),
    internalReference: vine.string().nullable(),
    shellId: vine.number(),
    inventoryStatus: vine.string(),
    rating: vine.number(),
  })
)
