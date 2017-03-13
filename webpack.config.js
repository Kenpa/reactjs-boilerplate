const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015', 'stage-1'] }
        }],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
