/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ProductsController from '#controllers/products_controller'
import AuthController from '#controllers/auth_controller'
import UsersController from '#controllers/users_controller'
import { middleware } from '#start/kernel'

router
  .group(() => {
    router.get('/products/:productId', [ProductsController, 'index']).use(middleware.auth())
    router.get('/products', [ProductsController, 'indexAll']).use(middleware.auth())
    router.post('/products', [ProductsController, 'create']).use(middleware.auth())
    router.patch('/products/:productId', [ProductsController, 'update']).use(middleware.auth())
    router.delete('/products/:productId', [ProductsController, 'delete']).use(middleware.auth())
    router.post('/token', [AuthController, 'create'])
    router.post('/account', [UsersController, 'create'])
  })
  .prefix('v1/api')
