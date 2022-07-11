const mysql = require('mysql');

const { DATABASE_PORT } = process.env;

const conn = mysql.createConnection({
  user: 'root',
  password: '',
  host: 'localhost',
  port: DATABASE_PORT,
});

module.exports = conn;
