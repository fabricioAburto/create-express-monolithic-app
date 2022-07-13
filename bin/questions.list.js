"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCatalog = void 0;
const chalk_1 = __importDefault(require("chalk"));
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
            message: chalk_1.default.blue('[express]:') + ' Ingresa el nombre de la app:',
        },
        {
            name: 'EXPRESS_PORT',
            type: 'number',
            default: 8080,
            message: chalk_1.default.blue('[express]:') + ' Ingresa el puerto del servidor:',
        },
        {
            name: 'AUTHOR',
            type: 'input',
            default: 'unknown',
            message: chalk_1.default.blue('[express]:') + ' Nombre del author:',
        },
        {
            type: 'list',
            default: 'none',
            name: 'wantDatabase',
            message: chalk_1.default.green('[Database]:') + '  Necesitas una base de datos?',
            choices: ['mysql', 'mongodb', 'redis', 'none'],
        },
    ],
    database: (type) => [
        {
            type: 'input',
            default: 'localhost',
            name: `${type.toUpperCase()}_HOST`,
            message: chalk_1.default.yellow(`[${type}]:`) + ' Ingresa el host:',
        },
        {
            type: 'number',
            name: `${type.toUpperCase()}_PORT`,
            default: ports[type] || ports.mongodb,
            message: chalk_1.default.yellow(`[${type}]:`) + ' Ingresa el puerto:',
        },
        {
            type: 'input',
            default: 'root',
            name: `${type.toUpperCase()}_USER`,
            message: chalk_1.default.yellow(`[${type}]:`) + ' Ingresa el usuario:',
        },
        {
            type: 'input',
            default: 'root',
            name: `${type.toUpperCase()}_PASSWORD`,
            message: chalk_1.default.yellow(`[${type}]:`) + ' Ingresa la contrasena:',
        },
        {
            type: 'input',
            default: 'testx',
            name: `${type.toUpperCase()}_DATABASE`,
            message: chalk_1.default.yellow(`[${type}]:`) + ' Ingresa la base de datos:',
        },
    ],
};
