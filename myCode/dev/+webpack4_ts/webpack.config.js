const path = require('path');

module.exports = {
  entry: {
    bundle: './src/app.ts'
  },

  output:{
      path: path.resolve(__dirname, 'build'),     // путь к каталогу выходных файлов - папка public
      publicPath: '/build/',
      filename: "app.js"       // название создаваемого файла
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/,
          },
      ]
  },
  resolve: {
      extensions: [".tsx", ".ts", ".js"]
  },
};