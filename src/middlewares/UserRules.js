import validator from 'express-validator'
const { body } = validator

//Exportando função com regras de validação utilizando o express-validator
export default function UserRules(){
    return [
        body('nomeUsuario', 'O usuario é requerido!').exists(),
        body('senhaUsuario', 'A senha é requerida!').exists()
    ]
}


