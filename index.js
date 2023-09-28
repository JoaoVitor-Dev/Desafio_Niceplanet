import { database, Usuario } from "./src/models/index.js";


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