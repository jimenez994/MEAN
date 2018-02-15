const express = require("express");
const app = express();
var port = 8001;
const path = require("path");

// body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Morgan
let morgan = require("morgan");
app.use(morgan("dev"))

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/crudDemo1');
let UserSchema = new mongoose.Schema({
    first_name: {type: String, require: true},
    last_name: {type: String, require: true},
    email: {type: String, require: true},
    editable: {type: Boolean, require: false},
    
})
mongoose.model("User", UserSchema);
let User = mongoose.model("User");

// static folder
app.use(express.static(path.join(__dirname, '/client/dist')));


// routes
app.get("/users", (req, res, next) => {
    User.find({}, (err, users)=>{
        return res.json(users)
    })
})
app.post("/users", (req, res, next) => {
    console.log("You to this part **************************"+req.body);
    delete req.body._id
    User.create(req.body, (err, user) => {
        if (err) return res.json(err)
        else return res.json(user)
    })
})

app.delete("/users/:id", (req, res, next) => {
    console.log("you deleted this ")
    User.deleteOne({_id:req.params.id}, (err, rawData) => {
        if (err) return res.json(err)
        else return res.json(true)
    })
})

app.put("/users/:id", (req, res, next) => {
    console.log("you edit this ", req.params.id)
    User.update({_id: req.params.id},req.body,(err, rawData) => {
        if (err) return res.json(err)
        else return res.json(true)
    })
})

app.all("*", (req, res,next)=>{
    res.sendfile(path.resolve("./client/dist/index.html"))
})
app.listen(port, () => {
    console.log(`hey you I'm in port ${port}`)
});
