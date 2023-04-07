# surf-design-system

Design System for https://surf.nl

## Getting Started

Install this package with `npm` into your own project:
```shell
npm install @surfnet/sds
```
or using `yarn`
```shell
yarn add @surfnet/sds
```
Import the sds.css in your index.js:
```js
import '@surfnet/sds/styles/sds.css';
```
Import the component's you want to use:
```js
import {LanguageSwitcher, Alert} from "@surfnet/sds";
```
You can then render the `LanguageSwitcher` component like any other React component in JSX.

Don't forget to choose and set the color palette on the body:
```
<body id="app" class="sds--color-palette--orange">
```

## Storybook

To generate and run the Storybook
```
npm run build-storybook
npm run storybook
```

## Publishing

Increment the version in `package.json` and run the following commands:
```
npm install
npm run build
npm login
npm publish --access public ./dist
```
The package is published on https://www.npmjs.com/package/@surfnet/sds and is deployed to https://surfnet.github.io/sds