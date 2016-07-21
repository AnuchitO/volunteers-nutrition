var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/index.tsx'
    ],
    vendor: [
      "axios",
      "jquery",
      "mobx",
      "mobx-react",
      "react",
      "react-dom",
      "material"
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.ts', '.tsx']
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
        // "Hammer": "hammerjs/hammer"
    }),
    new ExtractTextPlugin("bundle.css")
  ],
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'awesome-typescript-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        include: path.join(__dirname, 'src')
      },
      {
        test : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      }
    ]
  }
};

config.addVendor('material', path.join(__dirname, 'src/material/base.js'));
config.addVendor('material.css', path.join(__dirname, 'src/material/base.css'));

module.exports = config;
