const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build')
  },
  // production: 최적화하여빌드
  // development: 빠르게빌드
  // none: 아무기능없이빌드
  mode: 'none'
};
