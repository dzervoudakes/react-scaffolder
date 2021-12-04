const chalk = require('chalk');
const extend = require('lodash/extend');
const Generator = require('yeoman-generator');

const jspkg = require('./templates/javascript/package.json');
const tspkg = require('./templates/typescript/package.json');

// enable install tasks (yeoman v4 backwards compatibility)
extend(Generator.prototype, require('yeoman-generator/lib/actions/install'));

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('typescript');
    this.option('ts');
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
      },
      {
        type: 'input',
        name: 'yarn',
        required: true,
        message: 'Yarn? (Y/n)'
      }
    ]).then((data) => {
      this.data = data;
    });
  }

  writing() {
    const { applicationName, yarn } = this.data;
    const { typescript, ts } = this.options;

    const isTypeScript = typescript || ts;
    const isYarn = yarn.toLowerCase() === 'y';

    const templateName = isTypeScript ? 'TypeScript' : 'JavaScript';
    const pkg = isTypeScript ? tspkg : jspkg;
    const path = templateName.toLowerCase();

    const variables = {
      applicationName,
      cmd: isYarn ? 'yarn' : 'npm run',
      dependencies: pkg.dependencies,
      devDependencies: pkg.devDependencies,
      nodeVersion: '16.13.1',
      packageManager: isYarn ? 'yarn' : 'npm',
      packageManagerVersion: isYarn ? '1.22.4' : '6.14.7',
      templateName
    };

    this.fs.copy(
      this.templatePath(`${path}/**/*`),
      this.destinationPath(applicationName),
      {
        globOptions: {
          dot: true,
          ignore: [
            '**/node_modules',
            '**/package.json',
            '**/package-lock.json',
            '**/yarn.lock',
            '**/index.html',
            '**/README.md',
            '**/.gitignore.sample',
            '**/.npmignore'
          ]
        }
      }
    );

    this.fs.copy(
      this.templatePath(`${path}/.gitignore.sample`),
      this.destinationPath(applicationName, '.gitignore')
    );

    this._writeFile(
      this.templatePath('common/package.json.template'),
      this.destinationPath(applicationName, 'package.json'),
      variables
    );

    this._writeFile(
      this.templatePath('common/README.md.template'),
      this.destinationPath(applicationName, 'README.md'),
      variables
    );

    this._writeFile(
      this.templatePath('common/index.html.template'),
      this.destinationPath(`${applicationName}/public`, 'index.html'),
      variables
    );
  }

  install() {
    if (!this.options['skip-install']) {
      const { applicationName, yarn } = this.data;

      const isYarn = yarn.toLowerCase() === 'y';
      const method = isYarn ? 'yarnInstall' : 'npmInstall';

      this.log(
        chalk.cyan(`\nInstalling dependencies with ${isYarn ? 'yarn' : 'npm'}...\n`)
      );

      this[method](null, {}, { cwd: applicationName });
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
