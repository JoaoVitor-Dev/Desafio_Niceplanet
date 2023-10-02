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

router.get('/teste', verificarJWT, (req, res) => {
    res.json({
        "Testado": "sim"
    })
})

router.post('/novoProdutor', verificarJWT, ProducerRules(), Checker, ControllerProdutor.novoProdutor)

router.get('/consultarProdutor', verificarJWT, ControllerProdutor.consultaProdutor)

router.post('/novaPropriedade', verificarJWT, PropertyRules(), Checker, ControllerProprieade.novaPropriedade)

export default router;


