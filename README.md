# React Scaffolder
> Yeoman generator for scaffolding new React applications.

[![npm](https://img.shields.io/npm/v/generator-react-scaffolder.svg)](https://www.npmjs.com/package/generator-react-scaffolder)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## The Concept: Similar to Create React App, Not a Replacement

Create React App is an objectively _awesome_ tool and I have nothing but nice things to say about it. Over time, I've decided that I want to learn more about the engine behind the application, and so I started crafting and evolving my own React + Webpack configuration over time as a learning experience.

I have since decided to share my work with the open source community. Love it or loathe it, I will not be happy or offended either way. 😄

## Using the Generator

This scaffolding tool is a [yeoman](https://yeoman.io/) generator, and requires that `yo` be installed. After installing `yo`, run the following commands.

### Install the Generator

```
npm install -g generator-react-scaffolder
```

### Scaffold a New React Template

You will be prompted to enter the name of your application at this step:

```
yo react-scaffolder
```

Generate with TypeScript:

```
yo react-scaffolder --typescript
```

By default, the generator will attempt to install `npm` dependencies for you. If you or your organization do not use `npm`, you should skip this option as the generator has no support for `bower` or `yarn`:

```
yo react-scaffolder --skip-install
```

### What's Included

* **Syntax:** react, js, jsx, ts, tsx
* **Tooling:** eslint, stylelint, editorconfig, babel
* **Styling:** scss, css, autoprefixer
* **Testing:** jest, react testing library
* **Build instructions:** provided via the `README.md` file generated with each new scaffold
