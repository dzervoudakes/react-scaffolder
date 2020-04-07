const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('typescript');
    this.option('skip-install');
  }

  _writeFile(templatePath, destinationPath, params) {
    if (!this.fs.exists(destinationPath)) {
      this.fs.copyTpl(templatePath, destinationPath, params);
    }
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'applicationName',
        required: true,
        message: 'What is the name of the application?'
      }
    ]).then((data) => {
      this.data = data;
    });
  }

  writing() {
    const { applicationName } = this.data;
    const { typescript, ts } = this.options;

    const path = typescript || ts ? 'ts' : 'es';

    this.fs.copy(
      this.templatePath(`${path}/**/*`),
      this.destinationPath(applicationName)
    );

    this.fs.copy(this.templatePath(`${path}/.*`), this.destinationPath(applicationName));

    this._writeFile(
      this.templatePath(`package.json.${path}.template`),
      this.destinationPath(applicationName, 'package.json'),
      { applicationName }
    );

    this._writeFile(
      this.templatePath('common/README.md.template'),
      this.destinationPath(applicationName, 'README.md'),
      { applicationName }
    );

    this._writeFile(
      this.templatePath('common/index.html.template'),
      this.destinationPath(`${applicationName}/public`, 'index.html'),
      { applicationName }
    );
  }

  install() {
    if (!this.options['skip-install']) {
      const { applicationName } = this.data;

      this.log(chalk.cyan('\nInstalling npm dependencies...\n'));
      this.npmInstall(null, {}, { cwd: applicationName });
    }
  }

  end() {
    const { applicationName } = this.data;

    this.log(chalk.cyan('\nSetup complete. Happy coding!\n'));
    this.log(
      chalk.yellow(
        `Tip: Build instructions can be found in the ${applicationName}/README.md file.\n`
      )
    );
  }
};
