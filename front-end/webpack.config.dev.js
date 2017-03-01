var express = require('express');
var rewrite = require('express-urlrewrite');

var webpackBase = require("./webpack.config.js");
var cfg = Object.assign(webpackBase, {
   devServer: {
    port: 3005,
    // contentBase: [__dirname + "/libs"],
    setup: function(app){
      app.use('/libs', express.static(__dirname + '/libs'));
      app.use(rewrite('/u_*', '/index.html'));
    }
  }
});
module.exports = cfg;