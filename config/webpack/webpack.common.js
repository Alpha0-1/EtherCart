const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  resolve: { extensions: ['.js', '.jsx'] },
  output: { path: path.resolve(__dirname, '../../dist'), clean: true }
};

