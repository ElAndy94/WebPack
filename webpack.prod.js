const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  //   devtool: 'none',
  //   entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new CleanWebpackPlugin()]
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: './src/template.html'
  //     })
  //   ],
  //   module: {
  //     rules: [
  //       {
  //         test: /\.scss$/,
  //         use: [
  //           'style-loader', //3. Inject styles into DOM
  //           'css-loader', //2. Turns css into commonjs
  //           'sass-loader' //1. Turns sass into css
  //         ]
  //       }
  //     ]
  //   }
});
