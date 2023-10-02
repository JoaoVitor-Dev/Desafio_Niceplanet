import database from "../config/database.js";
import Produtor from "./Produtor.js";
import Propriedade from "./Propriedade.js";
import Usuario from "./Usuario.js";

//Definindo para o sequelize que um Produtor pode possuir várias Propriedades
Produtor.hasMany(Propriedade)
//Definindo para o sequelize que uma Proriedade pertence a um Produtor
Propriedade.belongsTo(Produtor)


//Exportação dos Models e da config do Database;
export {
    Usuario,
    Produtor,
    Propriedade,
    database
}

