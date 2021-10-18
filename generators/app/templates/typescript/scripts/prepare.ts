/**
 * Build script that installs pre-commit hooks with husky.
 *
 * @remarks
 * This script will run after each npm/yarn install. Pre-commit hooks will only be installed
 * if the project root is an active git repository.
 *
 * @packageDocumentation
 */
import fs from 'fs';
import { commandSync } from 'execa';
import chalk from 'chalk';

process.on('unhandledRejection', (err) => {
  throw err;
});

(async () => {
  if (fs.existsSync('.git')) {
    console.log(chalk.cyan('Found local .git directory, running husky install...\n'));
    await commandSync('husky install');
    if (!fs.existsSync('.husky/pre-commit')) {
      const { stdout: hookResult } = await commandSync(
        'husky add .husky/pre-commit "npm run pre-commit"',
        {
          shell: true
        }
      );
      console.log(chalk.cyan(`${hookResult}\n`));
    } else {
      console.log(chalk.yellow('Pre-commit hook found, skipping husky add.\n'));
    }
  } else {
    console.log(chalk.cyan('No local .git directory found, skipping husky install.\n'));
    console.log(
      chalk.yellow(
        'Tip: Pre-commit hooks with husky can only be installed at the root of a git repository.\n'
      )
    );
  }
})();
