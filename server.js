var express = require('express');
var http = require('http');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', function(req, res){
    res.send('Hello World');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Deck Remote Server listening on port " + app.get('port'));
});