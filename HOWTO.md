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

## **6.** Import emojis and finger pose import * as fp from "fingerpose"

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

- **Webpack**: Module bundler.
- **webpack-cli**: is the interface we use to communicate with webpack.
- **webpack-dev-server**: info coming soon.

### Plugins

- **CopyWebpackPlugin**: info coming soon.
- **HtmlWebpackPlugin**: info coming soon.
- **CleanWebpackPlugin**: info coming soon.
- **UglifyPlugin**: info coming soon.

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
