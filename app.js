var express = require('express')
var ejs = require('ejs')
var http = require('http')
var app = express()
var mongo = require('mongodb').MongoClient;

app.set('view engine','html')
app.engine('html',ejs.renderFile)
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/img',   express.static(__dirname + '/public/img'));
app.set('views',__dirname+'/public')
mongo.connect("mongodb://localhost:27017/airline_db",connectionCallback);
var place = ''
function connectionCallback(error,db)
{
  if(error)
    return console.error(error)
  var collection = db.collection('flight_details')
  collection.find().toArray(function(error,items)
  {
    place = console.log(items[1].Source)
  })
}

app.get('/', function (req, res) {
  res.render('hello',{title: "HelloWorld"})
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
