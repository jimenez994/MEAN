const mongoose = require('mongoose');
const User = mongoose.model('User');

console.log(User)

class UserController{
    create(req, res){
        User.findOne({ name: req.body.name }, (err, user) => {
            if(err) {               //catch server failure
                return res.json(err)
            }
            else if (!user){        //if input doesn't match database
                User.create(req.body, (err, newUser) => { //create a new user
                    if(err){                    // if new doesnt meet requirements
                        return res.json(err);   //then return error
                    }
                    req.session.user_id = newUser._id
                    return res.json(newUser)   // a new user is made here if no error
                })
            }else{
                req.session.user_id = user._id                
                return res.json(user);      //user is logged in if name is in db
            }
        })
    }
    logout(req, res){
        delete req.session.user_id;
        return res.json({status: true});
    }
    session(req, res){
        if(!req.session.user_id){
            return res.json({status: false});
        }
        User.findById(req.session.user_id, (err,user)=> {
            if(err){
                return res.json(err);
            }
            return res.json(user);
        })
    }
}
module.exports = new UserController();