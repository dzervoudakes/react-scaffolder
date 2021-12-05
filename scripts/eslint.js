/**
 * @fileoverview Build script that runs eslint against all application script files.
 */
const chalk = require('chalk');
const { ESLint } = require('eslint');

process.on('unhandledRejection', (err) => {
  throw err;
});

(async () => {
  // import esm modules
  const ora = (await import('ora')).default;

  const spinner = ora('Linting all scripts...');
  spinner.start();

  const fix = process.argv.indexOf('--fix') !== -1;
  const linter = new ESLint({ fix });

  const formatter = await linter.loadFormatter();
  const results = await linter.lintFiles(['**/*.js']);

  if (fix) {
    ESLint.outputFixes(results);
  }

  spinner.stop();
  console.log(formatter.format(results));

  const hasErrors = results.some(({ errorCount }) => errorCount > 0);

  if (!hasErrors) {
    const hasWarnings = results.some(({ warningCount }) => warningCount > 0);
    if (!hasWarnings) {
      console.log(chalk.green('Linting complete: no warnings or errors found.\n'));
    } else {
      console.log(chalk.yellow('Linting complete: warnings found.\n'));
    }
  } else {
    throw new Error('Lint errors found.\n');
  }
})().catch((error) => {
  console.error(error.stack);
});
