const HtmlWebpackPlugin = require('html-webpack-plugin') // plugin for html

module.exports = {
  entry: './src/app.js', // 👈 here is the path of the main js file
  output: {
    path: __dirname + '/build/', // 👈👇 here is the output path 
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}