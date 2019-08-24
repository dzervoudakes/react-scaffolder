const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    this.option('typescript');

    this.isTypeScript = opts.typescript ? true : false;
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
        message: 'What is the name of the application?',
      }
    ]).then(data => {
      this.data = data;
    });
  }

  writing() {
    const { applicationName } = this.data;

    this.fs.copy(
      this.templatePath(`templates/${this.isTypeScript ? 'ts' : 'ts'}/**/*`),
      this.destinationPath(`${applicationName}/**/*`)
    );

    this._writeFile(
      this.templatePath(`templates/${this.isTypeScript ? 'ts' : 'es'}/package.json.template`),
      this.destinationPath(applicationName, 'package.json'),
      { applicationName }
    );

    this._writeFile(
      this.templatePath('templates/common/READEME.md.template'),
      this.destinationPath(applicationName, 'README.md'),
      { applicationName }
    );

    this._writeFile(
      this.templatePath('templates/common/config.index.js.template'),
      this.destinationPath(`${applicationName}/config/`, 'index.js'),
      { applicationName }
    );
  }
};
