var express = require("express");
var path = require("path");
var session = require('express-session');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

//database 
mongoose.connect('mongodb://localhost/quote');
var QuoteSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 1},
    message: { type: String, required: true, minlength: 1 },
}, {timestamps: true });
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'

app.use(session({ secret: 'Real Madrid' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    Quote.find({},function(err,quotes){
        console.log(quotes);
        res.render("index");
    })
})

app.post('/process',function (req, res){
    var quote = new Quote(req.body);
    quote.save(function(err){
       if(err){
            console.log('something went wrong');
            res.redirect('/');
            // res.render('index', {errors: user.errors});
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/');
        } 
    })
})


app.listen(8000, function () {
    console.log("listening on port 8000");
})