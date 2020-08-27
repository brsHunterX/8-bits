const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production', // development
  entry: './src/Asteroids.ts',
  devServer: {
    hot: true,
    port: 8080,
    open: true,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
  },
  output: {
    filename: '8-bits.min.js',
    path: path.join(__dirname, './dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  }
}