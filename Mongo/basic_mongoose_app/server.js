var express = require("express");
var path = require("path");
var session = require('express-session');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 1},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'


app.use(session({ secret: 'Real Madrid' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    User.find({},function(err,users){
        console.log(users);
        res.render("index",{users :users});
    })
   
})
app.post('/users', function (req, res) {
    console.log(req.body);
    var user = new User(req.body);
    user.save(function(err){
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