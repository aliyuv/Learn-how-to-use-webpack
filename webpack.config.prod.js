const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output:{
    filename:'[name].[contenthash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
    // Also generate a test.html
    title: 'My App',
    filename: 'index.html',
    template: 'src/assets/test.html'
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // all options are optional
    filename: "[name].[contenthash].css",
    chunkFilename: "[id].[contenthash].css",
    ignoreOrder: false, // Enable to remove warnings about conflicting order
  }),
],
  module: {    
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};


