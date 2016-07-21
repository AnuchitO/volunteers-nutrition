var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },
  devtool: 'source-map',
  entry: {
    app: [
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
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: '/public/',
  },
  resolve: {
    alias: {},
    extensions: ['', '.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
        // "Hammer": "hammerjs/hammer"
    }),
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['awesome-typescript-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
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
