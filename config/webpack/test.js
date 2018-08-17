const environment = require('./environment');
const path = require('path')

const config = environment.toWebpackConfig();

module.exports = config;
