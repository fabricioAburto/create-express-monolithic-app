#!/usr/bin/env nod

import inquirer from 'inquirer';
import { AppCreator } from '../src';
import { Configurations } from '../src/types';

(async () => {
  const answers = await inquirer.prompt<Configurations>([
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

  AppCreator.create(answers).catch(console.error);
})();
