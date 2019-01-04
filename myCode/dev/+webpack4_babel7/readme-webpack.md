
```
npm init -fy
npm i webpack webpack-cli webpack-dev-server babel-loader @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties  -D
```

babel-polyfill - Позволяет 
babel-plugin-transform-runtime - Изолирует рабочую среду, актуально с (babel-polyfill). Уменьшает выходной файл путём исключения повторения.

### package.json
```js
{
  "name": "es6_webpack4",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "test!",
    "dev": "webpack-dev-server --hot --open --mode development",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "@babel/core": "^7.1.2",
    "@babel/plugin-proposal-class-properties": "^7.1.0",
    "@babel/plugin-proposal-decorators": "^7.1.2",
    "@babel/preset-env": "^7.1.0",
    "babel-loader": "^8.0.4",
    "webpack": "^4.21.0",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.9"
  }
}


```
