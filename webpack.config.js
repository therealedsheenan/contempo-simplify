// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Merge = require('webpack-merge');

const clientConfig = require('./tools/webpack/client');
const commonConfig = require('./tools/webpack/common');

// different webpack configurations on client and server
// the webpack.common.js file is the common webpack config for all of the environment
module.exports = function webpackConfig(env) {
  switch (env) {
    case 'dev':
      return Merge(commonConfig, clientConfig('DEV'));
    case 'prod':
      return Merge(commonConfig, clientConfig('PROD'));
    default:
      return commonConfig;
  }
};
