# React Scaffolder
> Yeoman Generator for scaffolding new React applications.

[![npm](https://img.shields.io/npm/v/generator-react-scaffolder.svg)](https://www.npmjs.com/package/generator-react-scaffolder)
[![Prettier badge](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

## Wait, what about Create React App? Should I use your generator instead?

> Create React App is an objectively _awesome_ tool and I have nothing but nice things to say about it. Over time, I
> decided that I want to learn more about the engine behind the application, and so I started crafting my own
> React+Webpack frameworks. The end result is what you see here in this generator.

I have since decided to share my work with the open source community. Love it or loathe it, I will not be happy or offended either way. 😄

## Ok, I'll give it a try... How do I use it?

Assuming you have `yo`, aka [yeoman](https://yeoman.io/) installed on your machine, simply run the following commands:

### Install the Generator
```
npm install -g generator-react-scaffolder
```

### Scaffold a New React+Webpack Template
```
yo react-scaffolder
```

You will be prompted to enter the name of your application ... and that's it! The scaffolding for your shiny new
React+Webpack application will be generated in the resulting directory matching the application name you entered.
Easy, right?

## But wait, there's more!

If you or your organization prefer to use TypeScript, because you know, type safety on the front end is kind of a thing now,
this generator has an option for that as well:

```
yo react-scaffolder --typescript
```

## What's included?

When looking at the initial build, you'll come to realize that I can be very nitpicky in terms of file/folder structure,
unit testing libraries, formatting and linting (including an unholy combination of `eslint:recommended`, `Airbnb`,
and `Prettier` configurations), etc. I have tailored this configuration to scale with the growing pains of a large and
expanding development force in mind. As such, this template is highly opinionated out of the box.

*  Build instructions are provided within the `README.md` file generated with each new scaffold
*  The base Webpack configuration is set up to handle basically any and all file import types you may think of
*  `jest` and `@testing-library/react` come with the generator by default for testing ... I no longer support `enzyme`, because #reasons
*  Templates are wired up to use `.scss` for styling, though `.css` will work as well
*  Because I am a masochist, I have also wired up some stringent `stylelint` rules (forewarning, `px` are blacklisted for accessibility purposes, you will need to add `px` to the whitelist in `.stylelintrc.js` if you wish to use this unit)
*  `lint-staged` is wired up along with `husky` to further maintain quality and consistent formatting on `pre-commit`
*  `jsdoc` is also included along with the `docdash` theme

**Note:** No `redux` or any other state management scaffolding is applied here out of the box.

> Don't like any of the default configuration or want to tweak it at all? I do not hide the build or configuration
> in the way `react-scripts` does before ejection, so tinker away to your heart's content. ❤️

## License

[MIT License](https://opensource.org/licenses/mit-license.php)
