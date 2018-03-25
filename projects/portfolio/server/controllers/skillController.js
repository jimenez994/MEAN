const mongoose = require('mongoose');
const Skill = mongoose.model("Skill");
const User = mongoose.model("User");

module.exports = {
    show(req, res){
        Skill.find({}, (err, skills) => {
            if(err){
                return res.json(err);
            }
            return res.json(skills);
        });
    },
    create(req, res){
        req.body._user = req.session.user_id;
        var newSkill = new Skill(req.body);
        User.findById(req.session.user_id, ( err, currentUser) => {
            Skill.create(newSkill, (err, skill) =>{
                if(err){
                    return res.json(err);
                }else{
                    currentUser._skill.push(newSkill);
                    User.findByIdAndUpdate(req.session.user_id, (currentUser), (err, res) =>{
                        if(err){
                            return res.json(err);
                        }
                    });
                    return res.json(skill)
                }
            });
        });
    },
    showOne(req, res){
        Skill.findById( req.params.id, (err, skill)=> {
            if (err) {
                return res.json(err);
            }
            return res.json(skill);
        });
    },
    update(req, res){
        Skill.findByIdAndUpdate(req.params.id, req.body, (err, skill) => {
            if (err){
                return res.json(err);
            }
            return res.json({result:"You successfully updeted the skill"});
        });
    },
    delete(req, res){
        Skill.findByIdAndRemove(req.params.id, (err, skill) =>{
            if (err) {
                return res.json(err);
            }
            User.findByIdAndUpdate(req.session.user_id, {$pull: { _skill: req.params.id }}, (err, res) => {
                if (err) {
                    return res.json(err);
                }
            });
            return res.json({result:"you successfully deleted the skill"});
        })
    }
}