import db from "./src/config/database.js";
import "./src/models/Usuario.js"

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
    await db.sync() 
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }