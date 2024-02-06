const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pug = {
  test: /\.pug$/,
  use: ['html-loader', 'pug-html-loader']
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      pug,
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.pug'), // шаблон
      filename: 'index.html', // название выходного файла
      // inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
  ],
}