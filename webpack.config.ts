// webpack.config.js
import path from 'path';

module.exports = {
  output: {
    hashFunction: 'xxhash64',
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    root: [path.resolve('./src')],
    extensions: ['', '.ts', '.tsx', '.js'],
  },
};
