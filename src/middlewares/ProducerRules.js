import validator from 'express-validator'
const { body } = validator

//Exportando função com regras de validação utilizando o express-validator
export default function ProducerRules(){
    return [
        body('nomeProdutor', 'o nome do produtor é requerido!').exists(),
        body('cpfProdutor', 'o cpf do produtor é requerido!').exists()
    ]
}


