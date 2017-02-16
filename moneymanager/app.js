var express=require('express');
var path=require('path');
var cookieParser = require('cookie-parser');
var favicon=require('serve-favicon');
//var logger = require('morgan')
var bodyParser=require('body-parser');
var routes=require('./routes/index.js');
var expressHbs=require('express-handlebars');
var mongoose=require('mongoose');

var app=express();
mongoose.connect('localhost:27017/MoneyManager');
//mongoose.connect('mongodb:// 127.0.0.1:27017/MoneyManager');
app.engine('.hbs',expressHbs({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine','.hbs');
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use('/',routes);

app.use(function(req,res,next){
	var err=new Error('Not Found');
	err.status =404;
	next(err);
});
//routes(app);
app.listen(3000);
console.log(" you are listening to port 3000");