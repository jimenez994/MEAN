const mongoose = require('mongoose');
const Link = mongoose.model('Link');
const User = mongoose.model("User");

module.exports = {
    show(req, res) {
        Link.find({}, (err, links) => {
            if (err) {
                return res.json(err);
            }
            return res.json(links);
        });
    },
    create(req, res){
        req.body._user = req.session.user_id;
        var newLink = new Link(req.body);
        User.findById(req.session.user_id, (err, currentUser) => {
            if (err){
                return res.json(err);
            }
            Link.create(newLink, (err, link) => {
                if (err){
                    return res.json(err);
                }else{
                    currentUser._link.push(newLink);
                    User.findByIdAndUpdate(req.session.user_id, (currentUser), (err, res) => {
                        if(err){
                            return res.json(err);
                        }
                    });
                    return res.json(link);
                }
            });
        });
    },
    showOne(req, res) {
        Link.findById(req.params.id, (err, link) => {
            if (err) {
                return res.json(err);
            }
            return res.json(link);
        });
    },
    update(req, res){
        Link.findByIdAndUpdate(req.params.id, req.body, (err, link) => {
            if(err){
                return res.json(err);
            }
            return res.json({result: "You successfully updated the link"});
        });
    },
    delete(req, res){
        Link.findByIdAndRemove(req.params.id, (err, link) => {
            if (err){
                return res.json(err);
            }
            User.findByIdAndUpdate(req.session.user_id, {$pull: { _link: req.params.id}}, (err, res) => {
                if (err){
                    return res.json(err);
                }
            });
            return res.json({ result: 'you have successfully delete the link'});
        });
        
    }
}