const webpack = require('./webpack/webpack.config')

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  webpackConfig: webpack,
  usageMode: 'expand'
}
