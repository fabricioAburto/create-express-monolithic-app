import chalk from 'chalk';
import { ExpressConfigs } from './types';

export const printHelpMessage = (answers: ExpressConfigs) => {
  console.log(``);
  console.log(chalk.bold('✅​ You are ready for staring to jack the world!'));
  console.log(``);
  console.log(chalk.italic('   Just few steps more: '));
  console.log(`     1. run: cd ./${answers.NAME}`);
  console.log(`     2. run: npm install`);
  console.log(`     3. run: npm start`);
  console.log(``);
  if (answers.wantDatabase !== 'none') {
    console.log(
      chalk.bold.yellow(
        ` Make sure your database connection variables are ok for your case.`
      )
    );
  }
};
