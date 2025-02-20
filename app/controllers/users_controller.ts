// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user'
import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  public async create({ request, response }: HttpContext) {
    const newUserRequest = await request.validateUsing(createUserValidator)
    const newUser = await this.userService.createUser(newUserRequest)
    return response.json(newUser)
  }
}
