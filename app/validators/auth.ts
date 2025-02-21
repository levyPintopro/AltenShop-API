import vine from '@vinejs/vine'
import { PASSWORDREGEX } from '../utils.js'
export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().toLowerCase(),
    password: vine.string().minLength(12).regex(PASSWORDREGEX),
  })
)
