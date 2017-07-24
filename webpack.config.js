"use strict"
import path from "path";

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "/dist/"),
    filename: "./bundle.js",
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  }
  modules: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders:'babel-loader'
    }]
  }
  resolve: {
    modules: [
      "node_modules"
    ]
  }
}
