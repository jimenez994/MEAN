const mongoose = require('mongoose');
const Work = mongoose.model("Work");
const User = mongoose.model("User");

module.exports = {
    show(req, res){
        Work.find({}, (err, works) => {
            if (err){
                return res.json(err);
            }
            return res.json(works);
        });
    },
    create(req, res){
        req.body._user = req.session.user_id;
        var newWork = new Work(req.body);
        User.findById(req.session.user_id, (err, currentUser) => {
            Work.create(newWork, (err, work) => {
                if (err) {
                    return res.json(err);
                }else{
                    currentUser._work.push(newWork);
                    User.findByIdAndUpdate(req.session.user_id, (currentUser), (err, res) => {
                        if(err){
                            return res.json(err);
                        }
                    });
                    return res.json(work);
                }
            });
        });
    },
    showOne(req, res){
        Work.findById(req.params.id, (err, work) => {
            if (err) {
                return res.json(err);
            }
            return res.json(work);
        });
    },
    update( req, res){
        Work.findByIdAndUpdate(req.params.id, req.body, (err, work) => {
            if (err){
                return res.json(err);
            }
            return res.json(work);
        });
    },
    delete(req, res) {
        Work.findByIdAndRemove(req.params.id, (err, work) => {
            if (err){
                return res.json(err);   
            }
            User.findByIdAndUpdate(req.session.user_id, {$pull: { _work: req.params.id}}, (err , res) => {
                (err)=> {
                    return res.json(err);
                }
            });
            return res.json({"result":"Yuo successfully deleted a work"});
        });
    }
}