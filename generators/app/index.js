const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  testMethod() {
    this.log('test successful');
  }
};
