import * as dotenv from "dotenv";

dotenv.config();

const db_config = {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

export { db_config };
