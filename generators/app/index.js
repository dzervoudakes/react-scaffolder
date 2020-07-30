const Generator = require('yeoman-generator');
const chalk = require('chalk');

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
    const skipInstall = this.options['skip-install'];

    const prompts = [
      {
        type: 'input',
        name: 'applicationName',
        required: true,
        message: 'What is the name of the application?'
      }
    ];

    if (!skipInstall) {
      prompts.push({
        type: 'input',
        name: 'yarn',
        required: true,
        message: 'Yarn? (Y/n)'
      });
    }

    return this.prompt(prompts).then((data) => {
      this.data = data;
    });
  }

  writing() {
    const { applicationName, yarn } = this.data;
    const { typescript, ts } = this.options;

    const templateName = typescript || ts ? 'TypeScript' : 'ES6';
    const path = templateName.toLowerCase();

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
            '**/.DS_Store'
          ]
        }
      }
    );

    this._writeFile(
      this.templatePath(`common/package.json.${path}.template`),
      this.destinationPath(applicationName, 'package.json'),
      { applicationName }
    );

    this._writeFile(
      this.templatePath('common/README.md.template'),
      this.destinationPath(applicationName, 'README.md'),
      { templateName, cmd: yarn === 'Y' ? 'yarn' : 'npm run' }
    );

    this._writeFile(
      this.templatePath('common/index.html.template'),
      this.destinationPath(`${applicationName}/public`, 'index.html'),
      { applicationName }
    );
  }

  install() {
    if (!this.options['skip-install']) {
      const { applicationName, yarn } = this.data;

      const isYarn = yarn === 'Y';
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
