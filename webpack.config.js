var path=require('path');
var webpack=require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
 entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/app.js'
  ],
  output: {
  	path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
      
        { test: /\.css$/, 
          loader: 'style-loader!css-loader?modules' 
        },
         { test: /\.(png|jpg)$/,
           loader: 'url-loader?limit=8192'
           }
      
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      template:'./src/index.html',
      filename: 'index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};
