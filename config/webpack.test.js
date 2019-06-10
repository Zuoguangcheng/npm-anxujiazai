const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, `../dist`)
  },

  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader',
      }],
    },
    {
      test: /\.css$/,
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              require('autoprefixer')()
            ]
          }
        }
      ]
    },
    {
      test: /\.less$/,
      use: [
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /\.scss/,
      use: [
        'css-loader',
        'sass-loader'
      ]
    }
    ]
  }
}