var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var app = express()
var port = 8001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'real_madrid',
   
    resave: false,
    saveUninitialized: true
}));
app.use(morgan('tiny'));


// app.use(express.static(path.join(__dirname, '/client/dist')));
require("./server/config/routes")(app)
require("./server/config/mongoose");

app.listen(port, () => {
    console.log(`hey you I'm in port ${port}`)
});
