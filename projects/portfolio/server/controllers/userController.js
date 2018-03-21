const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {
    show: (rewq, res) => {
        User.find({}, (err, users) => {
            if(err){
                return res.json(err)
            }
            return res.json(users);
        })
    },
    create: (req, res) => {
        User.find({  email: req.body.email} , (err, users) => {
            if(users.length > 0){
                return res.json({'errors':'that user already exists'});
            }else{
                User.create(req.body, (err, newUser) => {
                    if(err){
                        return res.json(err);
                    }
                    req.session.user_id = newUser._id;
                    return res.json(newUser);
                })
            }
        })
    },
    login: (req, res) => {
        if(req.body.email != null && req.body.password != null){
            User.findOne({ email: req.body.email }, (err, user) => {
                if(err){
                    return res.json();
                }
                if(user == null){
                    console.log(user)
                    return res.json({'errors':'Email was not found'})
                }else{
                    console.log("THERE IS A USER")
                    if(User.schema.methods.match(req.body.password, user.password)){
                        console.log("LOGIN SUCCESS")                        
                        req.session.user_id = user._id;
                        console.log("LOGIN SUCCESS")
                        return res.json(user);
                    }else {
                        return res.json({'errors':'Invalid password'});
                    }
                }
            })
        }else{
            return res.json({'errors': 'No login information was entered'})
        }
    }, 
    session: (req, res) => {
        User.findById(req.session.user_id, (err, user) => {
            if(err){
                return res.json(err);
            }
            return res.json(user);
        })
    },
    logout: (req, res) => {
        delete req.session.user_id;
        return res.json({"messafe":"you have logout"})
    },
}