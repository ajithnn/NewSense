var express = require('express');
var app = express();
var http = require('http').Server(app);
var request = require('request');
var userdata = [];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/load', function(req, res) {
    request.get({
            uri: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=' + req.query.load,
            json: true
        },
        function(err, resp, data) {
            if (!err) {
                res.send(data);
            } else {
                res.send("error");
            }
        });
})


app.get('/find', function(req, res) {
    request.get({
            uri: 'https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=' + req.query.find,
            json: true
        },
        function(err, resp, data) {
            if (!err) {
                res.send(data);
            } else {
                res.send("error");
            }
        });
})

http.listen(process.env.PORT || 3000)
