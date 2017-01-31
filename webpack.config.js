var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './js/index.jsx',
  output: { path: './public', filename: 'bundle.js' },

  //ignore extensions for imported files
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};