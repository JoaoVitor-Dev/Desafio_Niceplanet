import { DataTypes } from "sequelize";
import db from "../config/database.js";

//Defindo a tabela Propriedade com sequelize
const Propriedade = db.define("propriedades", {
    "idPropriedade": {
        type: DataTypes.BIGINT, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    "nomePropriedade": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "cadastroRural": {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Propriedade;