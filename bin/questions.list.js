"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCatalog = void 0;
const ports = {
    redis: 6379,
    mysql: 6603,
    mongodb: 27017,
};
exports.QuestionCatalog = {
    express: [
        {
            name: 'NAME',
            type: 'input',
            default: 'express-server',
            message: '[express]: Ingresa el nombre de la app:',
        },
        {
            name: 'EXPRESS_PORT',
            type: 'number',
            default: 8080,
            message: '[express]: Ingresa el puerto del servidor:',
        },
        {
            name: 'AUTHOR',
            type: 'input',
            default: 'unknown',
            message: '[express]: Nombre del author:',
        },
        {
            type: 'list',
            default: 'none',
            name: 'wantDatabase',
            message: '[express]: Necesitas una base de datos:',
            choices: ['mysql', 'mongodb', 'redis', 'none'],
        },
    ],
    database: (type) => [
        {
            type: 'input',
            default: 'localhost',
            name: `${type.toUpperCase()}_HOST`,
            message: `[${type}]: Ingresa el host:`,
        },
        {
            type: 'number',
            name: `${type.toUpperCase()}_PORT`,
            default: ports[type] || ports.mongodb,
            message: `[${type}]: Ingresa el puerto:`,
        },
        {
            type: 'input',
            default: 'root',
            name: `${type.toUpperCase()}_USER`,
            message: `[${type}]: Ingresa el usuario:`,
        },
        {
            type: 'input',
            default: 'root',
            name: `${type.toUpperCase()}_PASSWORD`,
            message: `[${type}]: Ingresa la contrasena:`,
        },
        {
            type: 'input',
            default: 'testx',
            name: `${type.toUpperCase()}_DATABASE`,
            message: `[${type}]: Ingresa la base de datos:`,
        },
    ],
};
