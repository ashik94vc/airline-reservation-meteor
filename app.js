var express = require('express')
var http = require('http')
var app = express()


app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/img',   express.static(__dirname + '/public/img'));

app.get('/', function (req, res) {
  res.sendFile('index.html')
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
