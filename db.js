const Pool = require('pg').Pool
require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
// };

// const proConfig = {
//   connectionString: process.env.DATABASE_URL, //HEROKU ADDON
// };
// const pool = new Pool(
//   process.env.NODE_ENV === "production" ? proConfig : devConfig 
 
// );

const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE} `;
const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : 
  connectionString, 
    ssl: {
      rejectUnauthorized: false, 
    }
});

module.exports = pool;
