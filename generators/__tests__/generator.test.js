const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('react scaffolder', () => {
  const generator = path.resolve(__dirname, '..', 'app');
  const appLocation = 'my-app';
  const commonOutput = [
    `${appLocation}/build`,
    `${appLocation}/config`,
    `${appLocation}/public`,
    `${appLocation}/scripts`,
    `${appLocation}/server`,
    `${appLocation}/src`,
    `${appLocation}/.babelrc`,
    `${appLocation}/.editorconfig`,
    `${appLocation}/.eslintignore`,
    `${appLocation}/.eslintrc.js`,
    `${appLocation}/.gitignore`,
    `${appLocation}/.lintstagedrc.js`,
    `${appLocation}/.npmrc`,
    `${appLocation}/.postcssrc.js`,
    `${appLocation}/.prettierrc.js`,
    `${appLocation}/.stylelintignore`,
    `${appLocation}/.stylelintrc.js`,
    `${appLocation}/jest.config.js`,
    `${appLocation}/package.json`,
    `${appLocation}/README.md`
  ];

  it('generates an es6 project', () => {
    const esOutput = [`${appLocation}/src/polyfills.js`, `${appLocation}/src/index.jsx`];

    return helpers
      .run(generator)
      .withPrompts({ applicationName: appLocation })
      .then(() => {
        assert.file(commonOutput.concat(esOutput));
      });
  });

  it('generates a typescript project', () => {
    const tsOutput = [
      `${appLocation}/tsconfig.json`,
      `${appLocation}/typedoc.json`,
      `${appLocation}/src/dev-client.d.ts`,
      `${appLocation}/src/globals.d.ts`,
      `${appLocation}/src/jest-dom.d.ts`,
      `${appLocation}/src/polyfills.ts`,
      `${appLocation}/src/index.tsx`
    ];

    return helpers
      .run(generator)
      .withOptions({ typescript: true })
      .withPrompts({ applicationName: appLocation })
      .then(() => {
        assert.file(commonOutput.concat(tsOutput));
      });
  });
});
