const path = require('path');

module.exports = {
  entry: './index.tsx',
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};