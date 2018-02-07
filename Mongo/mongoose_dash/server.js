var express = require("express");
var path = require("path");
var session = require('express-session');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
//database 
mongoose.connect('mongodb://localhost/mongoose');
var MonSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 },
    age: { type: Number, min: 1 },
}, { timestamps: true });
mongoose.model('Mongoose', MonSchema); // We are setting this Schema in our Models as 'User'
var Mongoose = mongoose.model('Mongoose') // We are retrieving this Schema from our Models, named 'User'

app.use(session({ secret: 'Real Madrid' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    Mongoose.find({},function(err,mongooses){

        res.render("index",{mongooses:mongooses});
    })
})
app.post('/new',function (req, res){
    var mongoose = new Mongoose(req.body);
    mongoose.save(function(err) {
        if(err){
            console.log('somehing wnet wrong');
            res.redirect('/');
        }else{
            console.log('successfully added a mongoose');
            res.redirect('/');
        }
    })
})
app.get('/mongooses/delete/:id',function (req, res) {
    Mongoose.findByIdAndRemove(req.params.id, function (err) {
        console.log("********");
        res.redirect('/');
    });
    
})
app.get('/mongooses/:id', function (req, res) {
    Mongoose.findById(req.params.id, function (err,mongoose) {
        res.render('info',{mongoose : mongoose});
    });

})
app.get('/mongooses/edit/:id', function (req, res) {
    Mongoose.findById(req.params.id, function (err, mongoose) {
        res.render('edit', { mongoose: mongoose });
    });

})

app.post('/mongooses/process/:id',function (req,res) {
    console.log(req.body);
    console.log(req.params.id);
    Mongoose.findOneAndUpdate({_id:req.params.id}, req.body, { upsert: false }, function (err, mongoose){
        if (err) return handleError(err);
       console.log(mongoose);
        res.redirect('/');
    } )
    
})





app.listen(8000, function () {
    console.log("listening on port 8000");
})