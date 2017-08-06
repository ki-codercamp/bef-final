var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var port = 3000;
var employees = require('./employees.js');
var Database = require('./Employee');
Database.connect();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.get('/',(req,res) =>{
  res.send('homepage is located at /employees');
});

app.use('/employees', employees);

app.listen(port,()=>{
  console.log('server up and running');
});
