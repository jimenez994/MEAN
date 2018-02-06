var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(session({secret: 'Real Madrid'}));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    if(req.session.num == null){
        req.session.num = Math.floor(Math.random() * 100) +1;
    }
    res.render("index",{message : req.session.message});
})
app.post('/guess', function (req, res){
    console.log(req.body);
    console.log(req.session.num);
    if(req.body.number == req.session.num){
        req.session.message = req.body.number +" was the number!"
    } else if (req.body.number > req.session.num){
        req.session.message = "Too high!"
    }else if (req.body.number < req.session.num){
        req.session.message = "Too low!"
    }else{
        req.session.message = "Invalid input"
    }
    res.redirect('/');
})
app.get('/reset', function (req, res){
    req.session.num = Math.floor(Math.random() * 100) + 1;
    req.session.message = ""
    res.redirect('/')
})

app.listen(8000,function (){
    console.log("listening on port 8000");
})