import Usuario from "../models/Usuario.js";

export default new class ControllerLogin {
    async login(req, res) {

        //Verificando se o usuário informado na requisição existe no banco de dados
        const usuario = await Usuario.findOne({
            attributes: ["nomeUsuario"],
            where:{
                nomeUsuario: req.body.nomeUsuario
            }
        });

        if (!usuario) return res.json({
            mensagem: "Erro! Usuário ou senha incorretos",
        });

        
        res.json({
            error: false,
            mensagem: "Login realizado com sucesso!",
            
        })
    }
}