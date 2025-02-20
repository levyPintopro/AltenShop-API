import User from '#models/user'
import { ModelAttributes } from '@adonisjs/lucid/types/model'

export class UserService {
  public async createUser(newUser: Partial<ModelAttributes<User>>) {
    return await User.create(newUser)
  }
}
