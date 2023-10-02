import { Usuario } from "../models/index.js";
import bcryptjs from "bcryptjs";

export default async function criarUsuario() {
  
  //Método do bcryptjs para gerar um valor aleatório 
  const salt = bcryptjs.genSaltSync();

  //Hasheando uma senha utilizando o "salt" gerado no método anterior
  const senha = bcryptjs.hashSync("123", salt);

  //Definindo um usuário para uso da Aplicação
  const usuario = {
    idUsuario: 1,
    nomeUsuario: "niceplanet",
    senhaUsuario: senha,
  };

  //Criando o usuário no Banco de Dados
  await Usuario.findOrCreate({
    where: {
      idUsuario: usuario.idUsuario,
    },
    defaults: usuario,
  })
    .then((r) => {
      console.log(r);
    })
    .catch((err) => {
      console.log(err);
    });
}
