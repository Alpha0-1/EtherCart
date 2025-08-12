const path = require('path');
const common = require('./webpack.common');

module.exports = {
  ...common,
  entry: {
    content: path.resolve(__dirname, '../../src/extension/content/content-script.js'),
    background: path.resolve(__dirname, '../../src/extension/background/service-worker.js'),
    popup: path.resolve(__dirname, '../../src/extension/popup/popup.js'),
    options: path.resolve(__dirname, '../../src/extension/options/options.js')
  },
  output: { path: path.resolve(__dirname, '../../dist/extension'), filename: '[name].js' }
};

