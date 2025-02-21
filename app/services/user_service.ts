import User from '#models/user'
import { ModelAttributes } from '@adonisjs/lucid/types/model'
import { errors } from '@adonisjs/auth'

export class UserService {
  driverName: 'admin' = 'admin'
  ADMIN: string[] = ['admin@admin.com']

  public async createUser(newUser: Partial<ModelAttributes<User>>) {
    return await User.create(newUser)
  }

  public async isAdmin(userId: number) {
    const user = await User.findOrFail(userId)
    const isAdmin = this.ADMIN.includes(user.email)
    if (!isAdmin) {
      throw new errors.E_UNAUTHORIZED_ACCESS('Unauthorized access you not admin', {
        guardDriverName: this.driverName,
      })
    }
    return isAdmin
  }
}
