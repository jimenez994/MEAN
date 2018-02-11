var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    path = require("path"),
    app = express(),
    routes = require('./server/config/routes.js'),
    port = 8001;

require('./server/config/mongoose.js');

app.use(session({
    secret: 'real_madrid',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/dist')));
routes(app);
app.listen(port, () =>{
    console.log(`hey you I'm in port ${port}`)
});
