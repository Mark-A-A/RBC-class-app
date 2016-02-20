var PORT = process.env.NODE_ENV || 8080;

//npm packages
var express             = require('express');
var expressHandlebars   = require('express-handlebars');
var session             = require('express-session')
var bodyParser          = require('body-parser');
var bcryt               = require('bcryptjs');
var mysql               = require('mysql');
var Sequelize           = require('sequelize');
var connecion2DB        = new Sequelize('rbc_class_db', 'root' {
  host: 'localhost',
  dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


var app = express();

//handlebars
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//database connection 

//handlebars 

//body parser


//Routes
app.get('/', function (req, res) {
    res.render('home');
});