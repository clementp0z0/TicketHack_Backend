var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models/connection')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const acceuilRouter = require('./routes/accueil');
const cartRouter = require('./routes/cart');
const bookingRouter = require('./routes/booking');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/accueil', acceuilRouter);
app.use('/cart', cartRouter);
app.use('/booking', bookingRouter);

module.exports = app;
