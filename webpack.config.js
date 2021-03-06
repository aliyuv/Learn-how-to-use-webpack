const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
  mode: 'development',
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
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
        "less-loader",
      ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.styl$/,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  }


