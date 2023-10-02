import database from "../config/database.js";
import Produtor from "./Produtor.js";
import Propriedade from "./Propriedade.js";
import Usuario from "./Usuario.js";

Produtor.hasMany(Propriedade)
Propriedade.belongsTo(Produtor)


//Exportação dos Models e da config do Database;
export {
    Usuario,
    Produtor,
    Propriedade,
    database
}

