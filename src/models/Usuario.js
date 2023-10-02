import { DataTypes } from "sequelize";
import db from "../config/database.js";

//Defindo a tabela Usuário com sequelize
const Usuario = db.define("usuario", {
    "idUsuario": {
        type: DataTypes.BIGINT, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    "nomeUsuario": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "senhaUsuario": {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

export default Usuario;