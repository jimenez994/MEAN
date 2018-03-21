const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8000;
const app = express();

// for the file upload
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "realMadrid" }));
app.use(express.static(__dirname + '/client/dist'));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, () => {
    console.log(`hey, you are in port ${port}`)
});