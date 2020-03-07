const dados = require('../dados.json')

module.exports = {

    async index(request, response){
        
        const autores = request.body;
        
        var aux = [];
        for(var i = 0; i < dados.dados.length; i++){
            for(var j = 0; j < dados.dados[i].autores.length; j++){
                if(dados.dados[i].autores[j].nomeAutor == autores.autores){
                    aux.push(dados.dados[i]);
                }
            }
        }

        return response.json(aux);
    }

}