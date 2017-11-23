var config = {
   entry: './main.js', //инициализация файла main.js
    
   output: { //местоположение входного файла и его название
      path:'./',  
      filename: 'index.js',
   },
    
   devServer: { //устанавливаем сервер для разработки
      inline: true,
      port: 7777 //порт можно любой
   },
    
   module: { 
      loaders: [ //настраиваем загрузчик файла для поиска js файлов
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
                
            query: { //применяем к ним es2015 и react
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;