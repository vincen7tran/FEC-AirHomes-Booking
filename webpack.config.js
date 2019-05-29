const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public/');

module.exports = {
  entry: {
    vendor: ['styled-components'],
    bundleBooking: `${SRC_DIR}/index.jsx`,
  },
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      minChunks: Infinity,
    },
  },
};
