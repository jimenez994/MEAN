const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8001;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname  + '/client/views');

app.use(express.static(__dirname + '/client/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'Real madrid',
    resave: false,
    saveUninitialized: true
}))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`hey I'm in ${port} ...`));