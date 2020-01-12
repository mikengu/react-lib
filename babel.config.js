const presets = [
  ['@babel/env', {targets: {node: 'current'}}],
  require.resolve('@babel/preset-react')
]

const plugins = [
  '@babel/plugin-proposal-class-properties'
]

const ignore = []

module.exports = {
  presets,
  plugins,
  ignore
}
