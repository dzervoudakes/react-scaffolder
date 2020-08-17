# React Scaffolder | Changelog

## v1.5.1

**Release Date:** 2020-08-17

* Inherit latest `webpack` updates for TypeScript template.
* Remove `react-hot-loader` dependency from each template in favor of native HMR methods.

## v1.5.0

**Release Date:** 2020-08-15

* Migrate templates to use `webpack-dev-server` and remove local server files.

## v1.4.5

**Release Date:** 2020-08-07

* Update dependencies.
* Update default `license` field in template packages.
* Increase testing and move test directory to project root.

## v1.4.4

**Release Date:** 2020-08-06

* Fix issue where `.gitignore` files are replaced with `.npmignore` during publish.
* Add dedicated `.npmignore` files for each template.

## v1.4.3

**Release Date:** 2020-08-05

* Update all config packages for `eslint`, `jest`, `prettier`, `stylelint` and `webpack` in template dependencies.
* Remove several dependencies corresponding to the change above.

## v1.4.2

**Release Date:** 2020-08-03

* Update `@dztools/webpack-config-react` and `@dztools/webpack-config-react-typescript` in template dependencies.
* Remove several dependencies corresponding to the change above.

## v1.4.1

**Release Date:** 2020-08-03

* Update `@dztools/webpack-config-react` and `@dztools/webpack-config-react-typescript` in template dependencies.

## v1.4.0

**Release Date:** 2020-08-02

* Tweak `webpack` base config.
* Remove `app-routes` directory from templates.
* Split `eslint`, `stylelint`, `prettier`, and `webpack` configs into separate packages.
* Merge `package.json.template` into one file and update dependencies.

## v1.3.3

**Release Date:** 2020-07-30

* Update lint configs and add `eslint-config-airbnb-base` to the root generator config.

## v1.3.2

**Release Date:** 2020-07-29

* Template variables for package manager, engine and current versions.
* Variablize build commands in package scripts.

## v1.3.1

**Release Date:** 2020-07-29

* Enable `yarn` parameter when skipping install.

## v1.3.0

**Release Date:** 2020-07-29

* Add `regenerator-runtime/runtime` polyfill.
* Set `allowJs` in `tsconfig.json` to `true`.
* Add `yarn` support.
* Revamp testing and build process.

## v1.2.1

**Release Date:** 2020-04-08

* Remove unnecessary polyfills.
* Reorganize dependencies.

## v1.2.0

**Release Date:** 2020-04-07

* Reorganize configuration files.
* Add support for `css modules`.
* Add support for `*.scss` imports from `node_modules`.

## v1.1.3

**Release Date:** 2020-04-06

* Update all template dependencies.
* Implement `case-sensitive-paths-webpack-plugin`.
* Implement `eslint-loader` and enforce formatting on pre compile (`babel` template only).

## v1.1.2

**Release Date:** 2020-03-30

* Tweak `webpack` config.
* Remove `copy-webpack-plugin`.
* Lower global coverage threshold to `80`.

## v1.1.1

**Release Date:** 2020-03-24

* Add missing `hot` export to `App.jsx` and `App.tsx`.

## v1.1.0

**Release Date:** 2020-03-24

* Enable strict features in TypeScript template.
* Update all template dependencies.
* Reformat all scripts after an update to `Prettier`.
* Implement `postcss-preset-env` and uninstall `autoprefixer` plugin.
* Remove `react/sort-comp` lint rule.
* Remove `no-undef` lint rule.
* Remove `arrow-parens` lint rule.
* Simplify `webpack` config.
* Replace `awesome-typescript-loader` with `ts-loader`.
* Remove `react-markdown-loader`.

## v1.0.3

**Release Date:** 2020-02-27

* Add missing `babel-jest` dependency for TypeScript template.

## v1.0.2

**Release Date:** 2020-02-20

* Support `.mjs` extension.

## v1.0.1

**Release Date:** 2020-02-18

* Include `hard-source-webpack-plugin` for caching in development.

## v1.0.0

**Release Date:** 2020-02-17

* Update template dependencies and tweak config.
* Update lint rules.
* Add technical requirements to README template.
* Remove forced `save-dev=true` from `.npmrc`.
* Update scripts, config and server for TypeScript.

## v0.1.2

**Release Date:** 2019-08-26

* Remove unnecessary `react/prop-types` eslint rule from `ts` builds.

## v0.1.1

**Release Date:** 2019-08-25

* Include auto install and `--skip-install` option.
* Add author, repository and license fields to package templates.

## v0.1.0

**Release Date:** 2019-08-25

* Initial publish for field testing.
