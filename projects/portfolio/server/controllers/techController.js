const mongoose = require('mongoose');
const Tech = mongoose.model("Tech");
const User = mongoose.model("User");

module.exports = {
    show(req, res) {
        Tech.find({}, (err, techs) => {
            if (err) {
                return res.json(err);
            }
            return res.json(techs);
        });
    },
    create(req, res){
        req.body._user = req.session.user_id;
        var newTech = new Tech(req.body);
        User.findById(req.session.user_id, (err, currentUser) => {
            Tech.create(newTech, (err, tech) => {
                if (err){
                    return res.json(err);
                }else{
                    currentUser._tech.push(newTech);
                    User.findByIdAndUpdate(req.session.user_id, (currentUser), (err, res) =>{ 
                        if (err){
                            return res.json(err);
                        }
                    });
                    return res.json(tech);
                }
            });
        });
    },
    showOne(req, res){
        Tech.findById(req.params.id, (err, tech) => {
            if (err){
                return res.json(err);
            }
            return res.json(tech);
        });
    },
    update(req, res){
        Tech.findByIdAndUpdate(req.params.id, req.body, (err, tech) => {
            if (err){
                return res.json(err);
            }
            return res.json({result: "You successfully updated this tech"});
        });
    },
    delete(req, res){
        Tech.findByIdAndRemove(req.params.id, (err, tech) => {
            if (err) {
                return res.json(err);
            }
            User.findByIdAndUpdate(req.session.user_id, {$pull: { _tech: req.params.id}}, (err, result)=> {
                (err)=> {
                    return res.json(err);
                }
            });
            return res.json({result: "You successfully deleted this tech"});
        });
    }
}