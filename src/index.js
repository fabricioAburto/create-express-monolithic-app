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
exports.AppCreator = void 0;
// import shell from 'shelljs';
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const glob_1 = __importDefault(require("glob"));
const path_1 = __importDefault(require("path"));
const ncp = util_1.default.promisify(require('ncp').ncp);
class AppCreator {
    static create(configs) {
        return __awaiter(this, void 0, void 0, function* () {
            const profiler = AppCreator.getProfiler(configs);
            yield ncp(path_1.default.join(__dirname, `./templates/express`), configs.name);
            AppCreator.renameFile(configs.name, 'gitignore', '.gitignore');
            AppCreator.renameFile(configs.name, 'env', '.env');
            AppCreator.template(configs.name + '/.env', profiler);
            glob_1.default.sync(`${configs.name}/**/*`).forEach(file => {
                if (fs_1.default.lstatSync(file).isFile())
                    AppCreator.template(file, profiler);
            });
        });
    }
    static renameFile(filename, oldName, newName) {
        if (fs_1.default.existsSync(path_1.default.normalize(`${filename}/${oldName}`))) {
            fs_1.default.renameSync(path_1.default.normalize(`${filename}/${oldName}`), path_1.default.normalize(`${filename}/${newName}`));
        }
    }
    static template(filename, profiler) {
        const content = fs_1.default.readFileSync(filename, 'utf8').toString();
        const template = Object.entries(profiler).reduce((acc, [key, value]) => {
            var _a;
            return acc.replace(new RegExp(`(\{\{${key}\}\}|\{\{ ${key} \}\})`, 'g'), (_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : '');
        }, content);
        fs_1.default.writeFileSync(filename, template);
    }
    static getProfiler(configs) {
        return {
            NAME: configs.name,
            AUTHOR: configs.author,
            PORT: configs.port || 3000,
            DATABASE_PORT: configs.dbPort,
            DATABASE_NAME: configs.dbName,
        };
    }
}
exports.AppCreator = AppCreator;
