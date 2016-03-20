var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var colors = require('colors');

//const webpackConfig = webpackConfigBuilder('development');

var app = express();
var compiler = webpack(webpackConfig);
console.log('webpackConfig', webpackConfig);
//console.log('webpackConfig.output.publicPath', webpackConfig.output);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath, // Dev middleware can't access webpackConfig, so we provide publicPath
  stats: { colors: true }, // pretty colored output
  noInfo: true  // Set to false to display a list of each file that is being bundled.
})); // for other settings see http://webpack.github.io/docs/webpack-dev-middleware.html

app.use(require('webpack-hot-middleware')(compiler));  // bundler (compiler) should be the same as above

app.get('*', function (req, res) {
  console.log(req.url.green.bold);
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(3001, 'localhost', function (err) {
  if (err) {
    console.error(err.red);
    return;
  }

  console.log('Listening at http://localhost:3001'.green.bold);
});