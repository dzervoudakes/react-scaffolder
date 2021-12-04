const path = require('path');

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('react scaffolder', () => {
  const generator = path.resolve(__dirname, '..', 'generators', 'app');
  const applicationName = 'my-app';
  const commonOutput = [
    `${applicationName}/build`,
    `${applicationName}/public`,
    `${applicationName}/scripts`,
    `${applicationName}/src`,
    `${applicationName}/.editorconfig`,
    `${applicationName}/.eslintignore`,
    `${applicationName}/.eslintrc.js`,
    `${applicationName}/.gitignore`,
    `${applicationName}/.lintstagedrc.js`,
    `${applicationName}/.npmrc`,
    `${applicationName}/.postcssrc.js`,
    `${applicationName}/.prettierrc.js`,
    `${applicationName}/.stylelintignore`,
    `${applicationName}/.stylelintrc.js`,
    `${applicationName}/jest.config.js`,
    `${applicationName}/package.json`,
    `${applicationName}/README.md`,
    `${applicationName}/webpack.config.js`
  ];

  const node = '>= 16.13.1';
  const npm = '>= 6.14.7';
  const yarn = '>= 1.22.4';

  it('generates a javascript template', () => {
    const esOutput = [
      `${applicationName}/.babelrc`,
      `${applicationName}/jsdoc.config.js`,
      `${applicationName}/src/polyfills.js`,
      `${applicationName}/src/index.jsx`
    ];

    return helpers
      .run(generator)
      .withOptions({ 'skip-install': true })
      .withPrompts({ applicationName, yarn: 'n' })
      .then(() => {
        assert.file(commonOutput.concat(esOutput));
        assert.noFile(`${applicationName}/.gitignore.sample`);
        assert.fileContent(path.join(`${applicationName}/README.md`), 'my-app');
      });
  });

  it('generates a typescript template', () => {
    const tsOutput = [
      `${applicationName}/tsconfig.json`,
      `${applicationName}/typedoc.json`,
      `${applicationName}/src/globals.d.ts`,
      `${applicationName}/src/jest-dom.d.ts`,
      `${applicationName}/src/polyfills.ts`,
      `${applicationName}/src/index.tsx`
    ];

    return helpers
      .run(generator)
      .withOptions({ 'skip-install': true, typescript: true })
      .withPrompts({ applicationName, yarn: 'n' })
      .then(() => {
        assert.file(commonOutput.concat(tsOutput));
        assert.noFile(`${applicationName}/.gitignore.sample`);
        assert.fileContent(path.join(`${applicationName}/README.md`), 'my-app');
      });
  });

  it('generates a template with NPM', () => {
    return helpers
      .run(generator)
      .withOptions({ 'skip-install': true })
      .withPrompts({ applicationName, yarn: 'n' })
      .then(() => {
        assert.jsonFileContent(`${applicationName}/package.json`, {
          name: applicationName,
          engines: { node, npm }
        });
        assert.fileContent(`${applicationName}/public/index.html`, applicationName);
        assert.fileContent(`${applicationName}/README.md`, 'npm');
        assert.noFileContent(`${applicationName}/README.md`, 'yarn');
      });
  });

  it('generates a template with Yarn', () => {
    return helpers
      .run(generator)
      .withOptions({ 'skip-install': true })
      .withPrompts({ applicationName, yarn: 'Y' })
      .then(() => {
        assert.jsonFileContent(`${applicationName}/package.json`, {
          name: applicationName,
          engines: { node, yarn }
        });
        assert.fileContent(`${applicationName}/public/index.html`, applicationName);
        assert.fileContent(`${applicationName}/README.md`, 'yarn');
        assert.noFileContent(`${applicationName}/README.md`, 'npm');
      });
  });
});
