import { Produtor } from "../models/index.js";

//Exportando classe do Controller Produtor junto seus métodos
export default new class ControllerProdutor {
  //Método para adicionar novo Produtor
  async novoProdutor(req, res) {

    const { nomeProdutor, cpfProdutor } = req.body;

    await Produtor.create({ nomeProdutor, cpfProdutor })
      .then(() => {
        res.json({
          Status: "Produtor cadastrado!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          mensagem: "Nao foi possivel cadastrar o produtor!",
        });
      });
  }

  //Método para consultar produtor (por ID ou TODOS)
  async consultaProdutor(req, res) {
    
    const { id } = req.query;
        /*
        Neste etapa é usado uma condicional para caso haja ID como parâmetro da requisição, retorne apenas 
        os registros referentes a esse ID.
        Caso não haja ID, o mesmo retorna todos
        */
    await Produtor.findAll(id && { where: { idProdutor: id } })
      .then((r) => {
        res.json(r);
      })
      .catch((error) => {
        res.status(500).json({
          mensagem: "Nao foi possivel consultar o produtor!",
        });
      });
  }
};
