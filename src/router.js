import express from "express";
import ControllerLogin from "./controllers/ControllerLogin.js";
import verificarJWT from "./middlewares/Auth.js";
import Checker from "./middlewares/Checker.js";
import UserRules from "./middlewares/UserRules.js";

const router = express.Router()

//validar
router.post('/login', UserRules(), Checker, ControllerLogin.login)

router.get('/teste', verificarJWT, (req, res) => {
    res.json({
        "testado": "sim"
    })
})

export default router;


