const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const routes = require('./routes');

// Paso necesario para poder obtener las variables de entornos de los archivos .env
require('dotenv').config();

const app = express();

// Configuraciones

const PORT = process.env.EXPRESS_PORT || 3000;
app.set('port', PORT);

app.use(cors());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

// Registrando los rutas
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

// Llamada de escucha
app.listen(app.get('port'), () => {
  console.log(
    `App is running at http://localhost:${PORT} in ${app.get('env')} mode`
  );
});
