var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/mongoose.js');

app.use(express.static(__dirname + '/myFirstAngularApp/dist'));

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8001, function(){
    console.log('listening on port 8001');
})