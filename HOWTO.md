# HOW-TO

## **1.** Install fingerpose npm install fingerpose

- Install Tensorflow Model [Hand-Pose](https://www.npmjs.com/package/@tensorflow-models/handpose).
- Full list of dependencies and devDependencies in [package.json]().

## **2.** Import dependencies

- App/index.js
  - `import * as bodypix` and `import * as tf`.
  - `import {useRef} from 'react'`. [useRef link](https://reactjs.org/docs/hooks-reference.html#useref)
    - help us reference our onscreen in DOM elements that keep state during the component lifecycle.

## **3.** Setup webcam and canvas

- App/index.js in `<header />` DOM element.
  - `<Webcam className="react-webcam"/>` return webcam component.
  - `<Canvas className="react-canvas" />` return canvas component.

## **4.** Define references to those

- App/index.js in `App()` component body.
  - connect canvas and webcam components with `useRef`.
  - `const webcamRef = useRef(null);`
  - `const camvasRef = useRef(null);`

## **5.** Add Use State

## **6.** Import emojis and finger pose import \* as fp from "fingerpose"

## **7.** Setup hook and emoji object

## **8.** Update detect function for gesture handling

## **9.** Add emoji display to the screen

---

## NPM

1. **Run App** `npm start`
2. Webpack Hot Reloading and ./dist directory bundling.

### npm start

- **scripts**: `npm start` runs scripts: `{ "start": "webpack serve"}`,
  - store your webpack commmands in package.json#scripts
  - alternatively run `npx webpack` or `node_modules/./bin/webpack`

---

## Package.JSON

### Packaging App

- **scripts**: `npm start` runs scripts: { "start": "webpack serve"},
- **main**: `webpack.config.js` is where webpack starts bundling from.

---

## WEBPACK HOW-TO

- [**Webpack**](https://www.npmjs.com/package/webpack): a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
- [**webpack-cli**](https://www.npmjs.com/package/webpack-cli): is the interface we use to communicate with webpack. webpack CLI provides a set of tools to improve the setup of custom webpack configuration.
- [**webpack-dev-server**](https://www.npmjs.com/package/webpack-dev-server): Use webpack with a development server that provides live reloading. This should be used for development only.
  - It uses [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) under the hood, which provides fast in-memory access to the webpack assets.

### Plugins

- [**CopyWebpackPlugin**](https://www.npmjs.com/package/copy-webpack-plugin): Copies individual files or entire directories, which already exist, to the build directory.
- [**HtmlWebpackPlugin**](https://www.npmjs.com/package/html-webpack-plugin): Plugin that simplifies creation of HTML files to serve your bundles.
- [**CleanWebpackPlugin**](https://www.npmjs.com/package/clean-webpack-plugin): A webpack plugin to remove/clean your build folder(s).
- [**UglifyPlugin**](https://www.npmjs.com/package/uglifyjs-webpack-plugin): This plugin uses [uglify-js](https://github.com/mishoo/UglifyJS) to minify your JavaScript.

---

## BABEL HOW-TO

### Babel Loader

### Babel Presets

- **@babel/preset-env**: info coming soon.
- **@babel/preset-react**: info coming soon.

### Babel Plugins

- **@babel/plugin-transform-runtime**: info coming soon.
- **@babel/plugin-proposal-pipeline-operator**: info coming soon.
- **@babel/plugin-syntax-dynamic-import**: info coming soon.

---

## TREE

- Install Tree with Homebrew using `brew install tree`
- To create dir structure `tree -I 'node_modules|package-lock.json|dist'`
