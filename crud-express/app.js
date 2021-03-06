var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//mongo conn
require('./db/mongo.connection');


//var users = require('./routes/users');
//var students = require('./routes/student/StudentRoute');
var students = require('./routes/student/student.route');
var professor = require('./routes/professor/professor.route');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//app.use('/api/v1/users', users);
app.use('/crud-express/students', students);
app.use('/crud-express/professor', professor);


module.exports = app;
