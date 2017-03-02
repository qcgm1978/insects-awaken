var path = require('path');
// var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var node_module_dir = path.resolve(__dirname,'node_module');


module.exports = {
  devtool: 'inline-source-map',
  entry: { 
    // 'react': 'react',
    // 'react-dom': 'react-dom',
    'bundle': './app/test.js', 
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  externals:{
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-addons-transition-group': 'React.addons.TransitionGroup',
    'react-addons-create-fragment': 'React.addons.createFragment'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders:[{
        'loader':['babel-loader'],
        'exclude':[
            //在node_modules的文件不被babel理会
            path.resolve(__dirname,'node_modules')
        ],
        'include':[
            //指定app这个文件里面的采用babel
            path.resolve(__dirname,'./app'),
            path.resolve(__dirname,'./groups'),
            path.resolve(__dirname,'./actions'),
            path.resolve(__dirname,'./reducers'),
            path.resolve(__dirname,'./container'),
            path.resolve(__dirname,'./components'),
        ],
        'test':/\.js?$/,
        // 'query':{
            // plugins:['transform-runtime'],
            // presets:['es2015','stage-0','react']
        // }
    }, {
      'test': /\.css$/, // Only .css files
      'include':[
            //指定app这个文件里面的采用babel
            path.resolve(__dirname,'./style')
        ],
      loader: ['style-loader', 'css-loader?modules&localIdentName=[name]--[local]-[hash:base64:5]'] // Run both loaders
    }]
  }
  // ,
  // "env": {
  //   "development": {
  //   "plugins": [["react-transform", {
  //      "transforms": [{
  //        "transform": "react-transform-hmr",
  //        // if you use React Native, pass "react-native" instead:
  //        "imports": ["react"],
  //        // this is important for Webpack HMR:
  //        "locals": ["module"]
  //      }]
  //      // note: you can put more transforms into array
  //      // this is just one of them!
  //    }]]
  //   }
  // }
}
