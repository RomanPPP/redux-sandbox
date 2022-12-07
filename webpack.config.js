const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = merge(common, {
  entry: {
    tasks: { import: "./src/tasks/index.jsx", filename: "./tasks.js" },
    posts: { import: "./src/posts/index.jsx", filename: "./posts.js" },
    counter : { import: "./src/counter/index.js", filename: "./counter.js" },
  },
  mode: "production",
  
  devServer: {
    // configuration for webpack-dev-server
    historyApiFallback: true,

    overlay: true,
    port: 8080, // port to run dev-server
  },
  devtool: "inline-source-map",
  plugins : [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    
      algorithm: "gzip",
      deleteOriginalAssets: false,
    })
  ]
});
