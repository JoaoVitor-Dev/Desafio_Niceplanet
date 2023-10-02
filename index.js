import { database, Usuario } from "./src/models/index.js";
import express from "express";
import router from "./src/router.js";
import criarUsuario from "./src/config/UsuarioAPI.js";
//Criando instância do express
const app = express();

//Chamando um middleware do Express para serializar o corpo das requisições para objeto JavaScript
app.use(express.urlencoded());

//Passando um middleware do Express para fazer o parse nas requisições
app.use(express.json());

//Estabelecendo para o express que todas as rotas estarão após o /api/
app.use("/api", router);

//inicia a aplicação
app.on("connected", () => {
  app.listen(3000, () => {
    console.log("API rodando:http://localhost:3000");
  });
});

try {
  await database.authenticate();
  //comando para criar as tabelas no banco de dados
  await database.sync();
  await criarUsuario();
  app.emit("connected");
} catch (err) {}

