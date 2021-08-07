const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: 'css-loader' }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};