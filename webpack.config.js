
import path from "path";

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  }
  modules: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
