//Ler os dados no arquivo .JSON
const dados = require('../dados.json')

module.exports = {

    async index(request, response){
        
        //Captura o tipo de descrição requisitado pelo cliente
        const tipo = request.body;
        
        var aux = [];
        
        //Percorre todas as proposições
        for(var i = 0; i < dados.dados.length; i++){
            if(dados.dados[i].descricaoTipo == tipo.tipo){              //Só coloca no vetor de proposições que irá ser retornado se
                aux.push(dados.dados[i]);                               //o tipo da proposição for o tipo solicitado pelo cliente
            }
        }

        return response.json(aux);
    }

}
