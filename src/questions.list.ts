import chalk from 'chalk';

interface Port {
  [name: string]: number;
}
const ports: Port = {
  redis: 6379,
  mysql: 6603,
  mongodb: 27017,
};

export const QuestionCatalog = {
  express: [
    {
      name: 'NAME',
      type: 'input',
      default: 'express-server',
      message: chalk.blue('[express]:') + ' Ingresa el nombre de la app:',
    },
    {
      name: 'EXPRESS_PORT',
      type: 'number',
      default: 8080,
      message: chalk.blue('[express]:') + ' Ingresa el puerto del servidor:',
    },
    {
      name: 'AUTHOR',
      type: 'input',
      default: 'unknown',
      message: chalk.blue('[express]:') + ' Nombre del author:',
    },
    {
      type: 'list',
      default: 'none',
      name: 'wantDatabase',
      message: chalk.green('[Database]:') + '  Necesitas una base de datos?',
      choices: ['mysql', 'mongodb', 'redis', 'none'],
    },
  ],
  database: (type: string) => [
    {
      type: 'input',
      default: 'localhost',
      name: `${type.toUpperCase()}_HOST`,
      message: chalk.yellow(`[${type}]:`) + ' Ingresa el host:',
    },
    {
      type: 'number',
      name: `${type.toUpperCase()}_PORT`,
      default: ports[type] || ports.mongodb,
      message: chalk.yellow(`[${type}]:`) + ' Ingresa el puerto:',
    },
    {
      type: 'input',
      default: 'root',
      name: `${type.toUpperCase()}_USER`,
      message: chalk.yellow(`[${type}]:`) + ' Ingresa el usuario:',
    },
    {
      type: 'input',
      default: 'root',
      name: `${type.toUpperCase()}_PASSWORD`,
      message: chalk.yellow(`[${type}]:`) + ' Ingresa la contrasena:',
    },
    {
      type: 'input',
      default: 'testx',
      name: `${type.toUpperCase()}_DATABASE`,
      message: chalk.yellow(`[${type}]:`) + ' Ingresa la base de datos:',
    },
  ],
};
