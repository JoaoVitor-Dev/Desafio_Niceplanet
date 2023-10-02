import { Usuario } from "../models/index.js";
import bcryptjs from "bcryptjs";

export default async function criarUsuario() {
  
  const salt = bcryptjs.genSaltSync();
  const senha = bcryptjs.hashSync("123", salt);

  const usuario = {
    idUsuario: 1,
    nomeUsuario: "niceplanet",
    senhaUsuario: senha,
  };

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
