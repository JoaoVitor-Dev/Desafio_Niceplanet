import validator from 'express-validator'
const { body } = validator

export default function UserRules(){
    return [
        body('usuario', 'O usuario é requerido!').exists(),
        body('senha', 'A senha é requerida!').exists()
    ]
}
