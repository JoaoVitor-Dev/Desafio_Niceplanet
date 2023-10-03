
# Teste para Desenvolvedor Back-End da empresa Niceplanet Geotecnologia

Projeto desenvolvido para o desafio da Niceplanet, com o objetivo de simular a criação de uma API que possibilita à indústria cadastrar os Produtores e as Propriedades de sua carteira de clientes, para que enfim sejam monitoradas pela própria Niceplanet.



## Especificações Técnicas:
Node Js | Banco de Dados MySQL\
Bibliotecas: Express | Sequelize | JWT  | bcryptjs | .env


## Executando o Projeto

No terminal, utilize o comando git clone no repositório: https://github.com/JoaoVitor-Dev/Desafio_Niceplanet.git


## Banco de Dados
Crie um Banco de dados MySQL com o nome 'apiniceplanet' de acordo com a configuração do arquivo .env, pois a aplicação se encarregará de criar as tabelas.

Observação: Caso a instância do MySQL possua usuário e senha diferente do arquivo .env, basta atribuir aos parâmetros 'DB_USERNAME' e 'DB_PASSWORD'.





## Rodando a aplicação

### 1º `cd Desafio_Niceplanet`

Executando o comando para acessar a pasta do projeto.

### 2º `npm install`

Execute este comando para instalar todas as dependências necessárias.

### 3º `npm start`

Execute este comando para rodar a aplicação.\
Poderá acessá-la na url: [http://localhost:3000](http://localhost:3000)





## Rotas
/api/login **POST**
---------------

http://localhost:3000/api/login

Para acessar as rotas é necessario estar autenticado no sistema, e para isso pode ser feito uma requisição **POST** na rota de login. 
Deve ser enviado um **Json** com os dados do usuário padrão:


```json
{ 
    "nomeUsuario":"niceplanet",
    "senhaUsuario": "123" 
} 
```
Com o envio dos dados válidos, o sistema retorna uma mensagem de sucesso junto ao Token de autenticação.

```json
{ 
    "mensagem": "Login realizado com sucesso!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTYyODc3MzcsImV4cCI6MTY5NjQ2MDUzN30.-6ikmL3Yu68XHdLy_K_WTQntn-3Fikw32WlOmVySWmA" 
}
```

**Observação**: Este Token deve ser passado no **Bearer**, pois todas as rotas verificam a validade do mesmo.

----
 
/api/novoProdutor **POST**
-------------------

http://localhost:3000/api/novoProdutor

Nesta rota é executado uma requesição do tipo **POST** para adicionar novos produtores. 
Para isso deve ser enviado um **Json** com os dados que deseja cadastrar, exemplo:

```json
{ 
    "nomeProdutor":"niceplanet", 
    "cpfProdutor": "00000000001" 
}
```

Com isso será retornado um outro **Json** com o seguinte conteúdo:

```json
{ 
    "mensagem":"Produtor cadastrado!", 
}
```

----
 
/api/novaPropriedade **POST**
-------------------

http://localhost:3000/api/novaPropriedade

Nesta rota é executado uma requesição do tipo **POST** para adicionar novas propriedades. 
Para isso deve ser enviado um **Json** com os dados que deseja cadastrar, exemplo:

**Observação**: Nesta rota é necessario enviar o Id do produtor no corpo da requisição, pois o sistema irá fazer o vínculo desta propriedade com o produtor informado. 

```json
{ 
    "nomePropriedade":"Propriedade da Niceplanet", 
    "cadastroRural": "00000000022",
    "idProdutor": 1
}
```

Com isso será retornado um outro **Json** com o seguinte conteúdo:

```json
{ 
     "Mensagem": "Propriedade cadastrada com sucesso!" 
}
```

----
 
/api/consultarProdutor **GET**
-------------------

http://localhost:3000/api/consultarProdutor

Nesta rota é executado uma requesição do tipo **GET** para realizar a busca de um produtor ou de todos os produtores.

Utilizando esta rota passando um ```Id``` como parâmetro, será retornado um **Json** com os dados do produtor referentes a este Id.

```json
    {
        "idProdutor": 1,
        "nomeProdutor": "niceplanet",
        "cpfProdutor": "00000000001",
    }
```


**exemplo:** http://localhost:3000/api/consultarProdutor?Id=1

Utilizando esta rota sem parâmetros o sistema vai retornar um **Json** com todos os produtores do sistema.

**exemplo:** http://localhost:3000/api/consultarProdutor


----
 
/api/consultarPropriedade **GET**
-------------------

http://localhost:3000/api/consultarPropriedade

Nesta rota é executado uma requesição do tipo **GET** para realizar a busca de uma ou mais propriedades no sistema.

Utilizando esta rota passando um ```Id``` como parâmetro, será retornado um **Json** com os dados da propriedade referentes a este Id.

```json
    {
        "idPropriedade": 1,
        "nomePropriedade": "Propriedade da Niceplanet",
        "cadastroRural": "00000000022",
        "produtorIdProdutor": 1
    }
```

**exemplo:** http://localhost:3000/api/consultarPropriedade?Id=1

Utilizando esta rota sem parâmetros o sistema vai retornar um **Json** com todos as propriedades do sistema.

**exemplo:** http://localhost:3000/api/consultarPropriedade?Id=1








