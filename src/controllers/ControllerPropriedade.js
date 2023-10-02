import { Propriedade } from "../models/index.js"

export default new class ControllerPropriedade{
    async novaPropriedade(req, res){
        //desestruturação do body da requisição
        const {nomePropriedade, cadastroRural, idProdutor} = req.body 

        //criando uma nova Propriedade no Banco de Dados
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

    //Método de consulta 
    async consultaPropriedade(req, res) {
        const { id } = req.query;
        /*
        Neste etapa é usado uma condicional para caso haja ID como parâmetro da requisição, retorne apenas 
        os registros referentes a esse ID.
        Caso não haja ID, o mesmo retorna todos
        */
        await Propriedade.findAll(id && { where: { idPropriedade: id } })
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