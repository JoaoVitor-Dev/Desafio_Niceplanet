
# Teste para Desenvolvedor Back-End da empresa Niceplanet Geotecnologia

Projeto desenvolvido para o desafio da Niceplanet, com o objetivo de simular a criação de uma API que possibilita à indústria cadastrar os Produtores e as Propriedades de sua carteira de clientes, para enfim sejam monitoradas pela própria Niceplanet.



## Especificações Técnicas:
Node Js | Banco de Dados MySQL
Bibliotecas: Express | Sequelize | JWT  | bcryptjs


## Executando o Projeto

No terminal, utilize o comando git clone no repositório: https://github.com/JoaoVitor-Dev/Desafio_Niceplanet.git


## Banco de Dados
Crie um Banco de dados MySQL com o nome 'apiniceplanet' de acordo com a configuração do arquivo .env, pois a aplicação se encarregará de criar as tabelas.

Observação: Caso a instância do MySQL possua usuário e senha diferente do arquivo .env, basta atribuir aos parâmetros 'DB_USERNAME' e 'DB_PASSWORD'.




## Rotas
/api/login

/api/novoProdutor

/api/consultarProdutor

/api/novaPropriedade

/api/consultarPropriedade