const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.ExtendedAPIPlugin(),
    new LodashModuleReplacementPlugin({
      'shorthands': true,
      'flattening': true,
      'collections': true,
      'cloning': true,
    })
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    filename: '[name].[hash].js'
  },
}
