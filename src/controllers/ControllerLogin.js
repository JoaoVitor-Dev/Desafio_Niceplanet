import Usuario from "../models/Usuario.js";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";

export default new class ControllerLogin {
  async login(req, res) {

    //Verificando se existe um usuário no banco de dados com o mesmo nome
    const usuario = await Usuario.findOne({
      attributes: ["nomeUsuario", "senhaUsuario"],
      where: {
        nomeUsuario: req.body.nomeUsuario,
      },
    });

    //Se o usuário não existir, retorna um json com a mensagem de erro
    if (!usuario)
      return res.json({
        mensagem: "Erro! Usuário ou senha incorretos",
      });

    //Verificando se a senha passada na requisição é igual a senha hash do usuário
    if (
      !(await bcryptjs.compare(req.body.senhaUsuario, usuario.senhaUsuario))
    ) {
      return res.json({
        mensagem: "Erro: Usuário ou senha incorretos!",
      });
    }

    //gerar token
    let token = Jwt.sign({ id: usuario.idUsuario }, process.env.SECRET, {
      //Tempo de expiração do token
      expiresIn: "2d",
    });

    //retorna mensagem de login com sucesso + token de autênticação gerado
    res.json({
      mensagem: "Login realizado com sucesso!",
      token,
    });
  }
};
