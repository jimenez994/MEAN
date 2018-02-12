const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(session({ secret: 'Real Madrid'}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/client/dist'));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8001, function () { 
    console.log("now online in 8001");
});