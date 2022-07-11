# create-express-monolithic-app

Es una opcion mas completa a los generadores actuales. 


## Como usarlo

```cmd
npm install -g create-express-monolithic-app
```

Ingresas a la carpeta que se genero, la cual deberia llamarse igual al nombre que has pasado o sino deberias tener una carpeta llamada `express-server`

Por ultimo installar dependencias y lanzar la applicacion.

```
npm install
npm start
```

## Conexion a la base de datos
Por defecto se configurar una conexion con el driver de mysql con las siguientes variables:
```md
PORT=3306
USER=root
PASSWORD=
HOST=127.0.0.1
DATABASE_NAME=test
```
Asegurate de cambiar estos valores con los adecuados en tu caso.



