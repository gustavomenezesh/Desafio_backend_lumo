### 1. INTRODUÇÃO

A api tem como objetivo servir dados sobre proposições da câmara dos vereadores, para clientes onde estes terão a possibilidade de solicitar proposições de determinado autor ou de determinado tipo, através das rotas disponíveis na api.

A tecnologia utiliada para o desenvolvimento do programa foi o nodejs, e para realizar os testes e simulação foi utilizado o insomnia (para simular as requisições dos clientes e suas respectivas respostas)

### 2. REQUISITOS

.Ter o nodejs instalado, link:https://nodejs.org/pt-br/download/

.Yarn instalado (Para rodar a api), link:https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable

.Insomnia instalado (Para realizar os testes), link:https://insomnia.rest/download/

### 3. TESTE DE FUNCIONAMENTO

Para realizar os testes das rotas, é necessário,após a instalações necessárias, abrir o insomnia e criar as "requisições".

#### - Criando requisição


Para criar uma requisição, basta clicar no simbolo de "+" no canto superior esquerdo como mostra a figura:

![](https://uploaddeimagens.com.br/images/002/529/728/original/print_criar.png?1583718777)

Irão aparecer 2 opções, escolha a "New Request". E após isso, Digite o nome da requisição e selecione o tipo (Nesse problema, iremos utilizar só do tipo "get").

##### .Listando todas proposições

Para listar todas proposições, basta colocar o seguinte endereço na barra de enviar: https://localhost:4444/list, como mostra a figura

![](https://uploaddeimagens.com.br/images/002/529/748/original/endere%C3%A7o_list.png?1583719840)

##### .Listando proposições por tipo

Para utilizarmos a rota de busca de proposições por tipo, basta criarmos uma nova requisição mudando apenas o nome com relação a outra criada anteriormente, e após isso o endereço que irá ser colocado na barra de enviar será: http://localhost:4444/typelist

Mas neste caso, iremos precisar que o cliente informe o tipo de proposições que ele está querendo, então para simular esse tipo de requisição, basta clicar em body->JSON e digitar:

  {

    "tipo":"Projeto de Lei"

  }

![](https://uploaddeimagens.com.br/images/002/529/793/original/Anota%C3%A7%C3%A3o_2020-03-09_001732.png?1583723952)

assim será simulado uma requisição de um cliente que deseja receber todas as proposições do tipo projeto de lei.

##### .Listando proposições por autor

Será do mesmo jeito que na requisição anterior, iremos criar uma nova requisição com o endereço de envio: http://localhost:4444/authorlist e iremos criar outro JSON só que com o filtro de autor:

  {

    "autores":"Coronel Tadeu"

  }
  
 ![](https://uploaddeimagens.com.br/images/002/529/794/original/authorlist.png?1583724440)
 
Após a criação das requisições no insomnia é necessário abrir o prompt de comando na pasta "backend" do projeto e rodar o comando "yarn dev" e a API estará rodando, pronto para receber requisições.

Para realizar o teste, basta ir em algumas das requisições criadas no insomnia e clicar no botão "SEND" e irá ser retornado pela API as porposições reuisitadas pelo cliente na parte direita do insomnia, como por exemplo:

![](https://uploaddeimagens.com.br/images/002/529/804/original/exemplo.png?1583725426)

