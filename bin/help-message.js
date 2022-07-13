"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printHelpMessage = void 0;
const chalk_1 = __importDefault(require("chalk"));
const printHelpMessage = (answers) => {
    console.log(``);
    console.log(chalk_1.default.bold('✅​ You are ready for staring to jack the world!'));
    console.log(``);
    console.log(chalk_1.default.italic('   Just few steps more: '));
    console.log(`     1. run: cd ./${answers.NAME}`);
    console.log(`     2. run: npm install`);
    console.log(`     3. run: npm start`);
    console.log(``);
    if (answers.wantDatabase !== 'none') {
        console.log(chalk_1.default.bold.yellow(` Make sure your database connection variables are ok for your case.`));
    }
};
exports.printHelpMessage = printHelpMessage;
