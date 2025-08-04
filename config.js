const dotenv = require('dotenv');
dotenv.config();
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST || "203.113.123.194",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "rootpassword",
    database: process.env.DB_NAME || "power_sensor",

  },
});
module.exports = knex;