const { resolve } = require('path');

module.exports = {
  app: resolve('../../src'),
  output: resolve(__dirname, '../../public'),
  port: 4200,
  context: resolve(__dirname, '../../'),
  entry: resolve('./src/index.jsx')
};
