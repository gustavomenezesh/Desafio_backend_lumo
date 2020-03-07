
const dados = require('../dados.json')

module.exports = {

    async index(request, response){
        
        const tipo = request.body;
        
        var aux = [];
        for(var i = 0; i < dados.dados.length; i++){
            if(dados.dados[i].descricaoTipo == tipo.tipo){
                aux.push(dados.dados[i]);
            }
        }

        return response.json(aux);
    }

}