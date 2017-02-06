
var express=require('express')


var mongoosdp=require('./controlers/mongoosdb.js');
var app=express();

app.set('view engine','ejs')
app.use(express.static('./public'));


mongoosdb(app);
app.listen(3000);
console.log(" you are listening to port 3000");



