
const path = require('path');
const webpack = require("webpack");
// var Person = require("babel!./Person.js").default;
// new Person();

/********************************************************************
 * lodash
 *******************************************************************/
// Load the fp build.
var fp = require('lodash/fp');
// Load a method category.
var object = require('lodash/fp/object');
// Load a single method for smaller builds with browserify/rollup/webpack.
var extend = require('lodash/fp/extend');
/* /lodash *********************************************************/

// path from 'path';

module.exports = {

  entry: {
    bundle: './src/index.js'
  },

  output:{
      path: path.resolve(__dirname, 'build'),     // путь к каталогу выходных файлов - папка public
      publicPath: '/build/',
      filename: "bundle.js"       // название создаваемого файла
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  devtool: 'source-map'
}

