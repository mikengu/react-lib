const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const getPlugins = args => {
  const plugins = Array.isArray(args)
    ? args
    : [args]

  return plugins
    .filter(Boolean)
    .map(name => require(`./plugins/webpack.${name}.js`))
}

module.exports = (config) => {
  const env = config.env || 'dev'
  const plugins = config.plugins || []
  const envConfig = require(`./webpack.${env}.js`)
  return webpackMerge(commonConfig, envConfig, ...getPlugins(plugins))
}
