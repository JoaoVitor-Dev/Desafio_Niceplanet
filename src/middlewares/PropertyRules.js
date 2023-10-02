import validator from 'express-validator'
const { body } = validator

//Exportando função com regras de validação utilizando o express-validator
export default function PropertyRules(){
    return [
        body('nomePropriedade', 'O nome da propriedade é requerido!').exists(),
        body('cadastroRural', 'O cadastro rural é requerido!').exists(),
        body('idProdutor', 'O Id do produtor é requerido').exists()
    ]
}

