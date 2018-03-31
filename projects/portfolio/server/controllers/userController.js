const mongoose = require("mongoose");
const User = mongoose.model("User");
const Skill = mongoose.model("Skill");
const Work = mongoose.model("Work");
const Recommendation = mongoose.model("Recommendation");
const Project = mongoose.model("Project");
const Message = mongoose.model("Message");
const Image = mongoose.model("Image");
const Accomplishment = mongoose.model("Accomplishment");
const Link = mongoose.model("Link");
const Tech = mongoose.model("Tech");



module.exports = {
    show(rewq, res) {
        User.find({}, (err, users) => {
            if(err){
                return res.json(err)
            }
            return res.json(users);
        })
    },
    create(req, res) {
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
    login(req, res) {
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
    edit(req, res){
        User.update({_id: req.session.user_id}, req.body, (err, rawData) =>{
            if(err) return res.json(err)
            else return res.json(true)
        })
    },
    session(req, res){
        User.findById(req.session.user_id)
        .populate({ path: '_skill', model:'Skill' })
        .populate({ path: '_work', model: 'Work' })
        .populate({ path: '_recommendation', model:'Recommendation' })
        .populate({ path: '_project', model:'Project' })
        .populate({ path: '_message', model: 'Message' })
        .populate({ path: '_image', model: 'Image' })
        .populate({ path: '_accomplishment', model: 'Accomplishment' })
        .populate({ path: '_link', model: 'Link' })
        .populate({ path: '_tech', model: 'Tech' })
        .exec((err, user) => {
            if(err){
                return res.json(err);
            }
            return res.json(user);
        })
    },
    logout(req, res) {
        delete req.session.user_id;
        return res.json({"messafe":"you have logout"})
    },
}