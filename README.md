# create-express-monolithic-app

Es una opcion mas completa a los generadores actuales. Suporta 
`mysql`, `redis` y `mongodb` como capa de persistencia.


## Como usarlo

1. Installa la herramienta de forma global

```cmd
npm install -g create-express-monolithic-app
```

2. Invoca la herramienta escribiendo el siguiente comando:

```cmd
npx create-express-monolithic-app
```

3. Sigue los pasos contestando a las preguntas de configuracion


4. Una vez que ha terminado, ingresas a la carpeta que se genero, la cual deberia llamarse igual que el nombre que has pasado o sino ingresaste el nombre se creara
una carpeta por defecto llamada `express-server`/

5. Instala todas las dependencias:

```
npm install
```

6. Por ultimo inicio el servidor:

```
npm start
```

## Conexion a la base de datos

Segun has seleccionado el drive de base de datos, se agregaran
unas variables de entorno en el archivo .env. Asegurate que sean 
los adecuados en tu caso.


### Colaboration

Feel free to colaborate to extends in this small generator. There is no rules.

### TODO

*There are a large list of task to do. Feel free to pick one and start the collaboration.*

- [ ] Add support for testing
- [ ] Add support for adding engine support
- [ ] Add library dynamically in the package.json
- [ ] Add support for containerize the app with docker-componse
