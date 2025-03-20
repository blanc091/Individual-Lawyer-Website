const path = require('path');

module.exports = {
  entry: './wwwroot/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'wwwroot/js')
  },
  mode: 'production',
  devtool: 'source-map'
};
