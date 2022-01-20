var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var inquiryRouter= require('./routes/inquiry');
var admissionRouter = require('./routes/admission');
var employeedetailsRouter =require('./routes/employeedetails');
var expenserecordRouter = require('./routes/expenserecord');
var receiptRouter = require('./routes/receipt');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inquiry',inquiryRouter);
app.use('/admission',admissionRouter);
app.use('/employeedetails',employeedetails);
app.use('/expenserecord',expenserecord);
app.use('/receipt',receipt);
module.exports = app;
