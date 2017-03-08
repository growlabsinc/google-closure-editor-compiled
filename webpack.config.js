// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  devtool: 'eval',
  entry: './src/index.js',
  resolve: {
    extensions: [".js", ".json"],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './editor.bundle.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(vue)$/,
        use: 'vue-loader'
      }, {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=30000',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  externals: {
    'goog.global': 'window'
  }
};

module.exports = config;
