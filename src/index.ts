#!/usr/bin/env node
// import shell from 'shelljs';
import fs from 'fs';
import util from 'util';
import glob from 'glob';
import path from 'path';
import inquirer from 'inquirer';
const ncp = util.promisify(require('ncp').ncp);

// import fs from 'fs';
// import path from 'path';
import { Configurations, Profiler } from './types';

export const questioner = async () => {
  const answers = await inquirer.prompt<Configurations>([
    {
      name: 'name',
      type: 'input',
      default: 'host',
      message: 'Ingresa el nombre:',
    },
    {
      type: 'list',
      default: 'none',
      name: 'templateEngine',
      choices: ['hbs', 'html', 'none'],
      message: 'Do you need a template engine:',
    },
    {
      type: 'confirm',
      default: false,
      name: 'docker',
      message: 'Do you need docker?',
    },
    {
      type: 'list',
      default: 'none',
      name: 'database',
      message: 'Do you need a database?',
      choices: ['mongodb', 'mysql', 'none'],
    },
  ]);
  console.log(answers);
};

questioner().then(() => {});

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export class AppCreator {
  static async create(configs: Configurations) {
    const profiler: Profiler = {
      NAME: configs.name,
      DOCKER: configs.docker,
      PORT: configs.port || 3000,
      DATABASE: configs.database,
      TEMPLATE_ENGINE: configs.templateEngine,
    };

    await ncp(path.join(__dirname, `../templates/express`), configs.name);
    AppCreator.renameFile(configs.name, 'gitignore', '.gitignore');

    glob.sync(`${configs.name}/**/*`).forEach(file => {
      if (fs.lstatSync(file).isFile()) AppCreator.template(file, profiler);
    });
  }

  /**
   * Rename a given file
   * @param filename
   * @param oldName
   * @param newName
   */
  static renameFile(filename: string, oldName: string, newName: string) {
    if (fs.existsSync(path.normalize(`${filename}/${oldName}`))) {
      fs.renameSync(
        path.normalize(`${filename}/${oldName}`),
        path.normalize(`${filename}/${newName}`)
      );
    }
  }
  /**
   * Add values to the files
   * @param filename
   * @param profiler
   */
  static template(filename: string, profiler: Profiler) {
    const content = fs.readFileSync(filename, 'utf8').toString();
    const template = Object.entries(profiler).reduce((acc, [key, value]) => {
      return acc.replace(
        new RegExp(`(\{\{${key}\}\}|\{\{ ${key} \}\})`, 'g'),
        value?.toString() ?? ''
      );
    }, content);
    fs.writeFileSync(filename, template);
  }
}
