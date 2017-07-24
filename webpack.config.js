"use strict"
import path from "path";

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "/dist/"),
    filename: "./[name].js",
    publicPath: '/'
  },
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
