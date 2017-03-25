var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

<<<<<<< HEAD
var routes = require('./routes/index');
=======
var index = require('./routes/index');
>>>>>>> 165a96acef3474bf8f676be8a3fc2691f6f951b3
var users = require('./routes/users');

var app = express();

<<<<<<< HEAD
var router = express.Router();

var db = require('./config/db');
=======
>>>>>>> 165a96acef3474bf8f676be8a3fc2691f6f951b3
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
<<<<<<< HEAD
app.use(router);
router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);
require('./routes/company')(router);

// catch 404 and forward to error handler
router.use(function(req, res, next) {
=======
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
>>>>>>> 165a96acef3474bf8f676be8a3fc2691f6f951b3
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

<<<<<<< HEAD
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
=======
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
console.log("server running in app.js")
>>>>>>> 165a96acef3474bf8f676be8a3fc2691f6f951b3
