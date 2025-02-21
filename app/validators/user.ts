import vine from '@vinejs/vine'
import { PASSWORDREGEX } from '../utils.js'

export const createUserValidator = vine.compile(
  vine.object({
    username: vine.string(),
    firstname: vine.string(),
    email: vine.string().email().toLowerCase(),
    password: vine.string().minLength(12).regex(PASSWORDREGEX),
  })
)
