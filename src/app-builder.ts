#!/usr/bin/env node
import fs from 'fs';
import util from 'util';
import glob from 'glob';
import path from 'path';
const ncp = util.promisify(require('ncp').ncp);
import { ExpressConfigs } from './types/index';
import { PersistanceType } from './types/connections';

export class AppCreator {
  static async create(configs: ExpressConfigs) {
    // Add base express
    await ncp(path.join(__dirname, `./templates/express`), configs.NAME);

    // Add Persistance Layer
    await addPersistanceLayer(configs.NAME, configs.wantDatabase);

    AppCreator.renameFile(configs.NAME, 'gitignore', '.gitignore');
    AppCreator.renameFile(configs.NAME, 'env', '.env');
    AppCreator.setEnvs(configs.NAME + '/.env', configs);
    AppCreator.template(configs.NAME + '/package.json', configs);

    glob.sync(`${configs.NAME}/**/*`).forEach(file => {
      if (fs.lstatSync(file).isFile()) AppCreator.template(file, configs);
    });
  }

  static renameFile(filename: string, oldName: string, newName: string) {
    if (fs.existsSync(path.normalize(`${filename}/${oldName}`))) {
      fs.renameSync(
        path.normalize(`${filename}/${oldName}`),
        path.normalize(`${filename}/${newName}`)
      );
    }
  }
  static setEnvs(filename: string, profiler: ExpressConfigs) {
    let content = '';
    for (const key of Object.keys(profiler)) {
      if (key.match(/[A-Z]+_[A-Z]+/g)) {
        content += `${key}=${profiler[key as keyof ExpressConfigs]}\n`;
      }
    }
    fs.writeFileSync(filename, content);
  }
  static template(filename: string, profiler: ExpressConfigs) {
    const content = fs.readFileSync(filename, 'utf8').toString();
    const template = Object.entries(profiler).reduce((acc, [key, value]) => {
      return acc.replace(
        new RegExp(`(\{\{[]${key}\}\}|\{\{ ${key} \}\})`, 'g'),
        value?.toString() ?? ''
      );
    }, content);
    fs.writeFileSync(filename, template);
  }
}

const addPersistanceLayer = async (root: string, option?: PersistanceType) => {
  if (option === 'none' || !option) return;
  const destDir = `${root}/src/persistance/${option}`;
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  await ncp(path.join(__dirname, `./templates/persistance/${option}`), destDir);
};
