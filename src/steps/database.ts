import inquirer from 'inquirer';
import { Command } from '../types/utils';
import { QuestionCatalog } from '../questions.list';

export default class DbStepCommand<Type> implements Command {
  async execute(type: string): Promise<Type> {
    return await inquirer.prompt<Type>(QuestionCatalog.database(type));
  }

  static new<T>() {
    return new DbStepCommand<T>();
  }
}
