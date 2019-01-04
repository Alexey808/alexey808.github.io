
```
npm init -fy
npm i webpack webpack-cli webpack-dev-server typescript ts-loader @babel/preset-typescript
```

https://appdividend.com/2018/03/18/how-to-setup-typescript-with-webpack-4/

### package.json
```js
{
  "name": "ts_webpack4",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "dev": "webpack-dev-server --hot --open --mode development",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "@babel/preset-typescript": "^7.1.0",
    "ts-loader": "^5.2.2",
    "typescript": "^3.1.3",
    "webpack": "^4.21.0",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.9"
  }
}

```
