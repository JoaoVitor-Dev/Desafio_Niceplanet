import express from "express";
import ControllerLogin from "./controllers/ControllerLogin.js";
import verificarJWT from "./middlewares/Auth.js";
import Checker from "./middlewares/Checker.js";
import UserRules from "./middlewares/UserRules.js";
import ControllerProdutor from "./controllers/ControllerProdutor.js";
import ProducerRules from "./middlewares/ProducerRules.js";
import ControllerProprieade from "./controllers/ControllerProprieade.js";
import PropertyRules from "./middlewares/PropertyRules.js";

const router = express.Router()

//Rota de login
router.post('/login', UserRules(), Checker, ControllerLogin.login)
//Rota para adicionar novo Produtor
router.post('/novoProdutor', verificarJWT, ProducerRules(), Checker, ControllerProdutor.novoProdutor)
//Rota para consultar um ou Todos os Produtores
router.get('/consultarProdutor', verificarJWT, ControllerProdutor.consultaProdutor)
//Rota para adicionar uma nova Propriedade
router.post('/novaPropriedade', verificarJWT, PropertyRules(), Checker, ControllerProprieade.novaPropriedade)
//Rota para consultar uma ou Todas as Propriedades
router.get('/consultarPropriedade', verificarJWT, ControllerProprieade.consultaPropriedade)
//Exportando rotas
export default router;


