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

router
  .group(() => {
    router.get('/products', [ProductsController, 'getAll'])
    router.post('/products', [ProductsController, 'createProduct'])
    router.get('/products/:productId', [ProductsController, 'getProduct'])
    router.patch('/products/:productId', [ProductsController, 'updateProduct'])
  })
  .prefix('v1/api')
