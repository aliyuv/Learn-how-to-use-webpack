const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output:{
    filename:'[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    // Also generate a test.html
    title: 'My App',
    filename: 'index.html',
    template: 'src/assets/test.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};


