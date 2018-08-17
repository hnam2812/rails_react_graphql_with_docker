const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const path = require('path')

environment.loaders.append('ts', {
  test: /\.tsx?$/,
  exclude: /\.spec\.(ts|tsx)$/,
  loader: 'ts-loader'
})

environment.loaders.append('json', {
  test: /\.json$/,
  use: 'json-loader'
})

environment.plugins.prepend('IgnoreMomentLocale', new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))

environment.config.merge({
  resolve: {
    alias: {
      exceljs: 'exceljs/dist/es5/exceljs.browser.js'
    }
  }
})

module.exports = environment
