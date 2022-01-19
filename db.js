const Pool = require('pg').Pool
require("dotenv").config();

const devConfig = {
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, //HEROKU ADDON
};
const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
