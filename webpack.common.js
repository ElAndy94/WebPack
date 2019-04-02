const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  //   devtool: 'none',
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  // output: {
  //   filename: 'main.[contentHash].js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader' //1. Turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs'
          }
        }
      }
    ]
  }
};
