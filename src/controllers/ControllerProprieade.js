import { Propriedade } from "../models/index.js"

export default new class ControllerPropriedade{
    async novaPropriedade(req, res){
        //desestruturação aplicada
        const {nomePropriedade, cadastroRural, idProdutor} = req.body 
        await Propriedade.create({nomePropriedade, cadastroRural, produtorIdProdutor: idProdutor}).then(() => {
            res.json({
                "Mensagem": "Propriedade cadastrada com sucesso!"
            })
        }).catch(() => {
            res.status(500).json({
                "Mensagem": "Erro ao cadastrar propriedade!"
            })
        })
    }

    async consultaPropriedade(req, res) {
        const { id } = req.query;
        await Produtor.findAll(id && { where: { idPropriedade: id } })
          .then((r) => {
            res.json(r);
          })
          .catch((error) => {
            res.status(500).json({
              mensagem: "Nao foi possivel consultar o produtor!",
            });
          });
      }
}