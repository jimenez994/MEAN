const mongoose = require('mongoose');
const Message = mongoose.model('Message');
const User = mongoose.model('User');

module.exports = {
    show(req, res){
        Message.find({}, (err, messages) => {
            if (err){
                return res.json(err);
            }
            return res.json(messages);
        });
    },
    create(req, res){
        req.body._user = req.params.id;
        var newMessage = new Message(req.body);
        User.findById(req.params.id, (err, currentUser) => {
            if (err){
                return res.json(err);
            }
            Message.create(newMessage, (err, message) => {
                if (err ){
                    return res.json(err);
                }else{
                    currentUser._message.push(newMessage);
                    User.findByIdAndUpdate(req.params.id, (currentUser), (err, res) => {
                        if (err){
                            return res.json(err);
                        }
                    });
                    return res.json(message);
                }
            });
        });
    },
    showOne(req, res){
        Message.findById(req.params.id, (err, message)=> {
            if(err ){
                return res.json(err);
            }
            return res.json(message);
        });
    },
    delete(req, res){
        Message.findByIdAndRemove(req.params.id , (err,message) => {
            if (err){
                return res.json(err);
            }
            User.findByIdAndUpdate(req.session.user_id, {$pull: { _message: req.params.id}}, (err, res) => {
                if (err) {
                    return res.json(err);
                }
            });
            return res.json({result: "You successfully delete the message"});
        })
    }
}