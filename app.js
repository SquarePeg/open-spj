var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var jwt = require('jsonwebtoken');
var config = require('./config/');

var app = express();

// APP CONFIG
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// configure app to use CORS requests and allow other domains to access out API
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization');
    next();
});

// DATABASE CONNECTION
var connectDb = function(){
    var options = {server: {socketOptions: { keepAlive: 1}}};
    
    mongoose.connect(config.database, options);
}
connectDb();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connectDb);


// STATIC FRONTEND LOCATION
app.use(express.static(__dirname + config.staticLocation));

// ROUTES
var router = require('./server/router')(app, express);
//var apiRouter = require('./server/router/routes/api')(app, express);


// TODO: add code to check for authentication and route
//app.all('/api*', requireSomeKindaAuthHere);

// CATCHALL ROUTE
app.get('*', function(req, res) {
    res.sendFile( path.join(__dirname + config.webStart) );
});


// START THE SERVER
// ===============================
app.set('port', config.port);

var server = app.listen(app.get('port'), function () {
    console.log('Magic happens on port ' + server.address().port);
});
