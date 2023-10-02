import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Produtor = db.define("produtor", {
    "idProdutor": {
        type: DataTypes.BIGINT, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    "nomeProdutor": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "cpfProdutor": {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Produtor;