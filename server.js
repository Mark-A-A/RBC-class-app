var PORT = process.env.NODE_ENV || 8080;

//npm packages
var express             = require('express');
var expressHandlebars   = require('express-handlebars');
var session             = require('express-session');
var bodyParser          = require('body-parser');
var bcryt               = require('bcryptjs');
var mysql               = require('mysql');
var Sequelize           = require('sequelize');


var app = express();

//MYSQL Connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'rbc_class_db'
});
 


//Testing the connection
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
 
//   console.log('The solution is: ', rows[0].solution);
// });
 


// var connecion2DB        = new Sequelize('rbc_class_db', 'root') {
//   host: 'localhost',
//   dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
// });

app.use(session({
  secret: 'keyboard MC123_rcb', 
  cookie: { maxAge: 1000*60*60
  },
  saveUninitialized: false,
}))


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

app.listen(PORT, function () {
  console.log("Listening on PORT %s", PORT);
})