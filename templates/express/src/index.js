const app = require('express')();
const helmet = require('helmet');
const routes = require('./routes');

// Paso necesario para poder obtener las variables de entornos de los archivos .env
require('dotenv').config();

// Configuraciones

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

app.use(cors());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

// Registrando los rutas
app.use('/', routes);

// Llamada de escucha
app.listen(app.get('port'), () => {
  console.log(
    `App is running at http://localhost:${PORT} in ${app.get('env')} mode`
  );
});
