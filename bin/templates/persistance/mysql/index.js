const mysql = require('mysql');
require('dotenv').config();
const env = process.env;

const conn = mysql.createConnection({
  user: env.MYSQL_USER,
  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
});

module.exports = conn;
