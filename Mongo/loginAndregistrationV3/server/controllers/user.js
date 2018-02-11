const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');

class UsersController {
    homepage(req, res){
        return res.render('index');
    }
    create(req, res){
        console.log(req.body);
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        User.create(req.body, (err, user) => {
            if(err){
                console.log("something went wrong when creating a user")
            }
            req.session.user_id = user._id;
            return res.json(user);
            
        })
    }
    authenticate(req, res){
        User.findOne({ email: req.body.email }, (err, user) => {
            if(err){
                // if using Angular
                return res.json(err);
                // if using ejs
                // return res.redirect('/')
            }
            if(user && user.authenticate(req.body.password)){
                req.session.user_id = user._id;
                return res.json(user);
            }
            return res.json({
                'errors': 'hey this is invalid'
            })
        })
    }
    isLoggedIn(req, res){
        if(req.session.user_id){
            // if using Angular
            return res.json({
                'status': true
            })
            // if using ejs
            // return res.redirect('/')
        }else{
            // if using ejs
            // redirect to the login page
            // if using Angular
            return res.json({
                'status': false
            })
        }
    }
    logout(req, res){
        delete req.session.user_id;
        // if is Angular
        return res.json({
            'status': true
        });
    }
}
module.exports = new UsersController();