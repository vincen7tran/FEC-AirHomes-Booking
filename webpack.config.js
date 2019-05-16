var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [ // changed from loaders
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',      
        query: {
          presets: ['@babel/react', '@babel/env']
        }
      }
    ]
  }
};