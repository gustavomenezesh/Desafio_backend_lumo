//carrega o servidor express
const express = require('express');
//carrega as rotas criadas para o problema
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

//Liga o servidor na porta 4444
app.listen(4444);
