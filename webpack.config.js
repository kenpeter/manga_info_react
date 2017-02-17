let path = require('path');

// https://github.com/jantimon/favicons-webpack-plugin
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')

// do html
let HtmlWebpackPlugin = require('html-webpack-plugin');

// This will send index.html to ./dist/index.html
let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

// sometime, remove node_modules can resolve lots of issues.
module.exports = {
  devtool: 'eval-source-map',

  // context, app
  context: __dirname + "/app",

  // https://stackoverflow.com/questions/42148632/conflict-multiple-assets-emit-to-the-same-filename
  // entry
  // ./app/js/app.js
  entry: {
    // it is javascript, and one entry
    javascript: "./js/app.js"
  },
  
  // output
  // ./dist/app.js
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  
  /*
  // not allowed???????
  resolve: {
    extension: ['', '.js', '.jsx', '.json']
  }
  */
  
  module: {
    // so only jsx need babel loader
    // .js use .babelrc????
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, 
          
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, 
          
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  
  plugins: [
    HTMLWebpackPluginConfig,
    new FaviconsWebpackPlugin(__dirname + '/logo.png')
  ]
  
};
