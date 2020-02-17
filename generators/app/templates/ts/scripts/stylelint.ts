/**
 * Build script that runs stylelint against all application style files.
 * @packageDocumentation
 */
import stylelint from 'stylelint';
import chalk from 'chalk';
import ora from 'ora';

process.on('unhandledRejection', err => {
  throw err;
});

const spinner = ora('Linting all styles...');
spinner.start();

const fix = process.argv.indexOf('--fix') !== -1;
const opts = { files: '**/*.scss', fix, formatter: 'string' };

stylelint
  .lint(opts)
  .then(result => {
    spinner.stop();
    console.log(result.output);

    if (!result.errored) {
      console.log(chalk.green('Style linting complete: no warnings or errors found.\n'));
    } else {
      throw new Error('Stylelint errors found.\n');
    }
  })
  .catch(error => {
    console.error(error.stack);
  });
