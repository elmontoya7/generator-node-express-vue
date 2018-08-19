var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressVue = require('express-vue');
require('dotenv').config();

//CONFIGURE EXPRESS-VUE
const vueOptions = {

};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

//404 HANDLER
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//ERROR HANDLER
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message || 'Error');
});

app.listen(process.env.PORT || 3000);
