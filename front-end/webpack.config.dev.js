var express = require('express');
var webpackBase = require("./webpack.config.js");
var cfg = Object.assign(webpackBase, {
   devServer: {
    open: true,
    port: 3005,
    setup: function(app){
      app.use('/libs', express.static(__dirname + '/libs'));
    }
  }
});
module.exports = cfg;