#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const src_1 = require("../src");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer_1.default.prompt([
        {
            name: 'name',
            type: 'input',
            default: 'express-server',
            message: 'Ingresa el nombre:',
        },
        {
            name: 'port',
            type: 'number',
            default: 8080,
            message: 'Ingresa el puero:',
        },
        {
            name: 'dbPort',
            type: 'number',
            default: 3306,
            message: 'Ingresa el puerto de la base de datos:',
        },
        {
            name: 'dbName',
            type: 'input',
            default: 'test',
            message: 'Ingresa el nombre de la base de datos:',
        },
        {
            name: 'author',
            type: 'input',
            default: 'unknown',
            message: 'Nombre del author:',
        },
    ]);
    src_1.AppCreator.create(answers).catch(console.error);
}))();
