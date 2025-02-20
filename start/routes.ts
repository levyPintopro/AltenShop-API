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
    router.get('/products/:productId', [ProductsController, 'index'])
    router.get('/products', [ProductsController, 'indexAll'])
    router.post('/products', [ProductsController, 'create'])
    router.patch('/products/:productId', [ProductsController, 'update'])
    router.delete('/products/:productId', [ProductsController, 'delete'])
  })
  .prefix('v1/api')
