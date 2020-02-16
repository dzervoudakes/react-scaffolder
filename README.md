# React Scaffolder
> Yeoman Generator for scaffolding new React applications.

[![npm](https://img.shields.io/npm/v/generator-react-scaffolder.svg)](https://www.npmjs.com/package/generator-react-scaffolder)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## The Concept: Similar to Create React App, Not a Replacement

Create React App is an objectively _awesome_ tool and I have nothing but nice things to say about it. Over time, I've decided that I want to learn more about the engine behind the application, and so I started crafting and evolving my own React + Webpack configuration over time as a learning experience.

I have since decided to share my work with the open source community. Love it or loathe it, I will not be happy or offended either way. 😄

## Using the Generator

This scaffolding tool is a [yeoman](https://yeoman.io/) generator, and requires `yo` to be installed. After installing `yo`, run the following commands:

### Install the Generator
```
npm install -g generator-react-scaffolder
```

### Scaffold a New React+Webpack Template
```
yo react-scaffolder
```

You will be prompted to enter the name of your application ... and that's it! The scaffolding for your shiny new React application will be generated in the resulting directory matching the application name you entered.

## Build Options

The generator can create a TypeScript application template as well if that is your preference.

```
yo react-scaffolder --typescript
```

By default, the generator will attempt to install dependencies for you via `npm`. If you or your organization do not use `npm`, you should skip this option as the generator has no support for `bower` or `yarn`.

```
yo react-scaffolder --skip-install
```

## Notes

* Build instructions are provided within the `README.md` file generated for each new scaffold
* Configuration for `jest` and `@testing-library/react` are installed automatically, with no `enzyme` support out of the box
* Each generated application supports both `.scss` and `.css` imports
* As this generator was built with my own personal preferences in mind, the formatting and other tooling are inherently nitpicky and opinionated out of the box, including `Prettier` and `Stylelint`
* `lint-staged` is wired up along with `husky` to further maintain quality and consistent formatting on pre-commit
* `jsdoc` is also included along with the `docdash` theme
* No `redux` or any other state management configuration is included
* The base `webpack` configuration can handle basically any and all file import types you may think of, though the configuration is exposed so you may tweak it to suit your needs and preferences
