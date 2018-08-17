const environment = require('./environment');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const config = environment.toWebpackConfig();

config.devtool = false;
config.plugins.unshift(new HardSourceWebpackPlugin());

module.exports = config;
