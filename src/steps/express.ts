import inquirer from 'inquirer';
import { Command } from '../types/utils';
import { ExpressConfigs } from '../types/index';
import { QuestionCatalog } from '../questions.list';

export default class ExpressStepCommand implements Command {
  async execute(): Promise<ExpressConfigs> {
    return await inquirer.prompt<ExpressConfigs>(QuestionCatalog.express);
  }

  static new() {
    return new ExpressStepCommand();
  }
}
