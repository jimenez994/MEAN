const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {
    create: (req, res) => {
        User.find({ email: req.body.email },(err, users) => {
            if (users.length > 0){
                return res.json({error: "user is already in the database"});
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
        User.findOne({ email: req.body.email}, (err, user) => {
            if(User.schema.methods.match(req.body.password, user.password)){
                req.session.user_id = user._id;
                return res.json(user);
            } else{
                return res.json({ invalid: "Invalid Credentials"});
            }
        })
    },
    session: (req, res) => {
        User.findById(req.session.user_id, (err, user) => {
            if(err){
                return res.json({session: "user not in session"})
            }
            return res.json(user);
        })
    },
    logout: (req, res) => {
        delete req.session.user_id;
        return res.json({ status : "You just been logout" })
    },
   
}