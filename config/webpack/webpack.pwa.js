const path = require('path');
const common = require('./webpack.common');

module.exports = {
  ...common,
  entry: path.resolve(__dirname, '../../src/pwa/src/index.js'),
  output: { path: path.resolve(__dirname, '../../dist/pwa'), filename: 'bundle.js' },
  devtool: 'source-map',
  module: { rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }] }
};

