
var express=require('express')


var todoControler=require('./controlers/todoControler');
var app=express();
//var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs')
app.use(express.static('./public'));

// app.get('/',function(req,res){
// 	res.render('index');
// });

// app.get('/contact',function(req,res){
// res.render('contact',{qs:req.query});
// 	//console.log(req.query)
// });
// app.post('/contact',urlencodedParser,function(req,res){
// res.render('contact',{qs:req.query});
// console.log(req.body);
// 	//console.log(req.query)
// });
// app.get('/profile/:name',function(req,res){
// 	//res.send('hi')
// 	var data={name:'priyanka',age:24,hobbies:['eating','waking','taking']};
// 	res.render('profile',{person:req.params.name,data:data});
// });
todoControler(app);
app.listen(3000);
console.log(" you are listening to port 3000");



