import { database, Usuario } from "./src/models/index.js"
import express  from "express";
import router from "./src/router.js"
import criarUsuario from "./src/config/UsuarioAPI.js";

const app = express()

app.use(express.urlencoded())

app.use(express.json())

app.use('/api', router)

app.on("connected", ()  => {
    app.listen(3000, () => {
        console.log('API rodando:http://localhost:3000')
    })    
})

try{
   await database.authenticate()
   //comando para criar tabelas
   await database.sync()
   await criarUsuario()
   app.emit("connected")
}catch(err){

}




/*
try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
    await database.sync() 

     await database.query('select * from usuarios').then(resultado => {
        console.log(resultado)
    }).catch(error => {
        console.log(error)
    })

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

/*

await Usuario.update({nomeUsuario: 'akdjasdja'}).then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})

/*
try {

    const result = await Usuario.update({nomeUsuario: '543535345'})
    await

    await database.query('select * from usuarios')

}catch(e) {
    ...
}
*/