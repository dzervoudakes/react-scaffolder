/**
 * Build script that installs pre-commit hooks with husky.
 *
 * @remarks
 * This script will run after each npm/yarn install. If dependencies are installed at the root of
 * a git repository, any pre-existing pre-commit hooks will be cleared prior to installing
 * husky and configuring the pre-commit hook (preventing duplicates).
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
    console.log(
      chalk.cyan('Found local .git directory, installing husky pre-commit hook...\n')
    );
    await commandSync('rimraf .husky/pre-commit');
    const { stdout: installResult } = await commandSync('husky install');
    const { stdout: hookResult } = await commandSync(
      'husky add .husky/pre-commit "npm run pre-commit"',
      {
        shell: true
      }
    );
    console.log(installResult);
    console.log(`${hookResult}\n`);
  } else {
    console.log(chalk.cyan('No local .git directory found, skipping husky install.\n'));
    console.log(
      chalk.yellow(
        'Tip: Pre-commit hooks with husky can only be installed at the root of a git repository.\n'
      )
    );
  }
})();
