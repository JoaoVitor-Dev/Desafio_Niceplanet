import { Produtor } from "../models/index.js";

export default new (class ControllerProdutor {
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

  async consultaProdutor(req, res) {
    const { id } = req.query;

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
})();
