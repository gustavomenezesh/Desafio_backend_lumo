//Ler o arquivo que contém os dados
const dados = require('../dados.json')

module.exports = {
    //função que irá ser linkada com o get da rota com filtro por autores específicos
    async index(request, response){
        
        //captura o nome do autor vindo da requisição do cliente
        const autores = request.body;
        
        var aux = [];
        
        //Varre todas as proposições contidas no arquivo .JSON
        for(var i = 0; i < dados.dados.length; i++){
            for(var j = 0; j < dados.dados[i].autores.length; j++){                     //Varre os autores envolvidos em cada proposição
                if(dados.dados[i].autores[j].nomeAutor == autores.autores){             //Só coloca no vetor de proposições aquelas que
                    aux.push(dados.dados[i]);                                           //possuirem o autor especificado pelo cliente
                }
            }
        }

        return response.json(aux);
    }

}
