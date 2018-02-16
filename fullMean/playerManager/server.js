const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = 8001;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function () {
    console.log(`hey, you are in port ${port}`)
});