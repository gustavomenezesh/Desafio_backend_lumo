
const dados = require('../dados.json')

module.exports = {

    async index(request, response){
        return response.json(dados.dados);
    }

}