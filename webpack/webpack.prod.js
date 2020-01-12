const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      fallback: 'style-loader',
      filename: '[name].[chunkhash]' + '.css',
      chunkFilename: '[id].css'
    }),
    new Dotenv({
      path: './.env.production'
    })
  ],
  devServer: {
    contentBase: './dist'
  }
}
