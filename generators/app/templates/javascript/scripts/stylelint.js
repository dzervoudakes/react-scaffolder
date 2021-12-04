/**
 * @fileoverview Build script that runs stylelint against all application style files.
 */
const stylelint = require('stylelint');

process.on('unhandledRejection', (err) => {
  throw err;
});

(async () => {
  // import esm modules
  const chalk = (await import('chalk')).default;
  const ora = (await import('ora')).default;

  const spinner = ora('Linting all styles...');
  spinner.start();

  const fix = process.argv.indexOf('--fix') !== -1;
  const results = await stylelint.lint({
    files: ['**/*.scss', '**/*.css'],
    fix,
    formatter: 'string'
  });

  spinner.stop();
  console.log(results.output);

  if (!results.errored) {
    console.log(chalk.green('Style linting complete: no warnings or errors found.\n'));
  } else {
    throw new Error('Stylelint errors found.\n');
  }
})().catch((error) => {
  console.error(error.stack);
});
