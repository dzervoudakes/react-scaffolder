/**
 * @fileoverview Build script that installs pre-commit hooks with husky.
 */
const fs = require('fs');
const { commandSync } = require('execa');
const chalk = require('chalk');

(async () => {
  if (fs.existsSync('.git')) {
    console.log(
      chalk.cyan('Found local .git directory, installing husky pre-commit hook...\n')
    );
    await commandSync('rimraf .husky/pre-commit');
    await commandSync('husky install');
    await commandSync('npx husky add .husky/pre-commit "npm run pre-commit"');
  } else {
    console.log(chalk.cyan('No local .git directory found, skipping husky install.\n'));
    console.log(
      chalk.yellow(
        'Tip: Pre-commit hooks with husky can only be installed at the root of a git repository.'
      )
    );
  }
})();
