import { Propriedade } from "../models/index.js"

export default new class ControllerPropriedade{
    async novaPropriedade(req, res){

        const {nomePropriedade, cadastroRural, idProdutor} = req.body 
        await Propriedade.create({nomePropriedade, cadastroRural, produtorIdProdutor: idProdutor}).then(() => {
            res.json({
                "Mensagem": "Proprieadade cadastrada com sucesso!"
            })
        }).catch(() => {
            res.status(500).json({
                "Mensagem": "Erro ao cadastrar propriedade!"
            })
        })
    }

    async consultaProprieade(req, res){

        await Propriedade.findAll()
    }
}