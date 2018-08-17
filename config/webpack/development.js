const environment = require('./environment');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const config = environment.toWebpackConfig();

config.devtool = "cheap-module-eval-source-map";
config.plugins.unshift(new HardSourceWebpackPlugin());

module.exports = config;
