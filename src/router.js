import express from "express";
import ControllerLogin from "./controllers/ControllerLogin.js";
import verificarJWT from "./middlewares/Auth.js";

const router = express.Router()


router.post('/login', ControllerLogin.login)

router.get('/teste', verificarJWT, (req, res) => {
    res.json({
        "testado": "sim"
    })
})

export default router;


