module.exports = {
  
  module: {
    rules: [
      {
        test: /\.bin$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "url-loader",
            options: {
              encoding: false,
              mimetype: false,
              generator: (content) => {
                return content;
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: "babel-loader", // определяем загрузчик
        options: {
          presets: ["@babel/preset-react"], // используемые плагины
        },
      },
    ],
  },
};
