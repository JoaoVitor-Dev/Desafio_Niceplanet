import { Sequelize } from "sequelize";
import { db_config } from "../../config/config.js";

//Criando instância de conexão do Sequelize
const db = new Sequelize(
  db_config.database,
  db_config.username,
  db_config.password,
  {
    dialect: db_config.dialect,
    host: db_config.host,
    logging: true,
  }
);

//exportando configuração do Database
export default db;
