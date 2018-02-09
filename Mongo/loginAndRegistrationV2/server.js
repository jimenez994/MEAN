let express = require('express');
let mongoose = require('mongoose');
let bodyParse = require('body-parser');
let session = require('express-session');
let app = express();

app.use(express.static(__dirname + "/client/static"));
app.use(bodyParse.urlencoded({ extended: true }));
app.use(session({ secret: "real madrid" }));
app.set("views", __dirname + "/client/views");
app.set("view engine", "ejs");

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8001, function(){
    console.log("Now in 8001");
});