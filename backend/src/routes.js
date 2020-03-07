//Carrega o objeto Router
const {Router} = require('express')

//carrega o tratamento criado para as rotas
const ListController = require('./controllers/ListController')
const TypeController = require('./controllers/TypeController')
const AutorController = require('./controllers/AutorController')

//Instancia o objeto um objeto Router
const routes = Router()

//Linkando as rotas
routes.get('/list', ListController.index)
routes.get('/typelist', TypeController.index)
routes.get('/authorlist', AutorController.index)


module.exports = routes;
