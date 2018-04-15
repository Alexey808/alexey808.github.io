# REACT

## Установка пакетов

```npm(консоль)
npm init -y
```

```npm(консоль)
npm install webpack webpack-dev-server webpack-cli babel-loader babel-core babel-preset-env babel-preset-react --save-dev
```

```npm(консоль)
npm install react react-dom --save
```
## Некоторые правила
  !Если вы не используете что-то в render(), оно не должно находиться в состоянии state.
  !Не модифицируйте состояние напрямую.
  !this.state назначается только в конструкторе.
  !Обновления состояния могут быть асинхронными.

## Начальная конфигурация

__./package.json__
```json
{
   "name": "my_react",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
      "dev": "webpack-dev-server --hot --open --mode development",
      "build": "webpack --mode production"
   },
   "keywords": [],
   "author": "laiten808@gmail.com",
   "license": "ISC",
   "dependencies": {
      "react": "^16.3.0",
      "react-dom": "^16.3.0"
   },
   "devDependencies": {
      "babel-core": "^6.26.0",
      "babel-loader": "^7.1.4",
      "babel-preset-env": "^1.6.1",
      "babel-preset-react": "^6.24.1",
      "webpack": "^4.4.1",
      "webpack-cli": "^2.0.14",
      "webpack-dev-server": "^3.1.1"
   }
}
```

__./webpack.config.js__
```js
var path = require('path');
 
module.exports = {
    entry: "./src/index.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            }
        ]
    }, 
    plugins: [
        // "new name.parop()"
    ]
}
```

__./app/index.jsx__
```js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1>Hello, world</h1>, 
  document.getElementById("app")
  );
```







