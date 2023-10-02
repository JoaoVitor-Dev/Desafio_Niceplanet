import database from "../config/database.js";
import Produtor from "./Produtor.js";
import Propriedade from "./Propriedade.js";
import Usuario from "./Usuario.js";

Produtor.hasMany(Propriedade)
Propriedade.belongsTo(Produtor)


//Importação e exportação das Models Usuario, Produtor, Propriedade e da configuração do Database
export {
    Usuario,
    Produtor,
    Propriedade,
    database

}

