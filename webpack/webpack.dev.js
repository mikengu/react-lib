
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      fallback: 'style-loader',
      filename: '[name]' + '.css',
      chunkFilename: '[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development'
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 8333,
    hot: true
  }
}
