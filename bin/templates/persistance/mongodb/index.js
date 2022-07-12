/*
-------------------------------------------------------
Que aprender de este archivo/modulo:
-------------------------------------------------------
Un archivo .js en nodejs no es nada mas que 
un modulo al igual que una clase en un lenguaje 
orientado a objetos. Y como es convension, se 
suele poner las dependencias (require) de primero,
luego las varibles/propiedades del modulo,
luego los functiones/metodos/interfaces publicas (las que los clientes usaran)
y por ultimo las exportaciones.

Si miras de esta forma un modulo facilmente podras aplicar principios
de diseno de software a este tipo de modulos que dan la impresion de no
tener un orden natural como una clase.

-------------------------------------------------------
Driver de conexion:
-------------------------------------------------------
Si quieres saber mas sobre este driver de connecion 
ve a esta direccion: https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb

*/

// 1. Dependencias
const { MongoClient, Db } = require('mongodb');
require('dotenv').config();

// 2. Propiedades

const CONFIGS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const env = process.env;

const connURL = `MONGODBdb://${env.MONGODB_USER}:${env.MONGODB_PASSWORD}@${env.MONGODB_HOST}:${env.MONGODB_PORT}/${env.MONGODB_DATABASE}`;

const client = new MongoClient(connURL, CONFIGS);

let dbConnection;

// 3. Metodos / Interface public
const initConnection = function(callback) {
  client.connect(function(err, db) {
    if (err || !db) return callback(err, null);
    dbConnection = db;
    return callback(null, db);
  });
};

function getConnection() {
  return dbConnection;
}

// 4. Exportaciones
module.exports = {
  /**
   * ### Init mongodb connection
   * @param {Function} callback
   */
  initConnection,
  /**
   * ### Mongodb Database connection
   * Return the `Db` connection.
   *
   * @example
   * // Ejemplo de como usar esta funcion:
   * const conn = getConnection();
   * const collection = conn.collection("myTodoTasks");
   * const task = await collection.find({title: 'Learn node.js'});
   * console.log(JSON.stringify(task, null, 2));
   *
   * @returns {Db}
   */
  getConnection,
};
