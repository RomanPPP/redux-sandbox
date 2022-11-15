const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {  // configuration for webpack-dev-server
    historyApiFallback: true,
    
    overlay: true,
    port: 8080, // port to run dev-server
    
    },
    devtool: 'cheap-source-map',
  module : {
    rules: [
      {
        test: /\.bin$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
             options: {
               encoding: false,
               mimetype: false,
               generator: (content) => {
                 return content;
               }
             },
           },
         ],
      },
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
        loader: "babel-loader",   // определяем загрузчик
        options:{
            presets:[ "@babel/preset-react"]    // используемые плагины
        }
    }
    
    ]
  }

};