const {Router} = require('express')
const ListController = require('./controllers/ListController')
const TypeController = require('./controllers/TypeController')
const AutorController = require('./controllers/AutorController')


const routes = Router()

routes.get('/list', ListController.index)
routes.get('/typelist', TypeController.index)
routes.get('/authorlist', AutorController.index)


module.exports = routes;