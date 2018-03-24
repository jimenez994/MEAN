const mongoose = require('mongoose');
const Accomplishment = mongoose.model('Accomplishment');
const User = mongoose.model('User');

module.exports = {
    show(req, res) {
        Accomplishment.find({}, (err, all)=> {
            if(err){
                return res.json(err);
            }
            return res.json(all);
        });
    },
    create(req, res) {
        req.body._user = req.session.user_id
        var newAccomplishment = new Accomplishment(req.body);
        User.findById(req.session.user_id, (err, currentUser) => {
            Accomplishment.create(newAccomplishment, (err, accomplishment) => {
                if (err){
                    return res.json(err);
                }else{
                    currentUser._accomplishment.push(newAccomplishment);
                    User.findByIdAndUpdate(req.session.user_id, (currentUser), (err, res) => {
                        if(err){
                            return res.json(err);
                        }
                    });
                    return res.json(accomplishment);
                }
            });
        });
    },
    showOne(req, res){
        Accomplishment.findById(req.params.id, (err, accomplishment) => {
            if(err){
                return res.json(err);
            }
            return res.json(accomplishment);
        });
    },
    update(req, res) {
        Accomplishment.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
            if(err){
                return res.json(err);
            }
            return res.json({"result":"You Successfully updated your Accomplisment"});
        })
    },
    delete(req, res){
        Accomplishment.findByIdAndRemove(req.params.id, (err, result) => {
            if (err){
                return res.json(err);
            }else{
                User.findByIdAndUpdate(req.session.user_id, {$pull: {_accomplishment: req.params.id}}, (err, res) => {
                    (err) => {
                        return res.json(err);
                    }
                });
                return res.json({ "result": "You Successfully deleted your Accomplisment" })
            }
        })
    }
}