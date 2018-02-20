const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const User = mongoose.model('User');

module.exports = {
    show: (req, res) => {
        Answer.find({}, (err, answers) => {
            if (err) {
                return res.json(err);
            }
            return res.json(answers);
        })
    },
    create: (req, res) => {
        console.log(req.body)
        req.body._user = req.session.user_id
        req.body._question = req.params.id
        console.log(req.body)
        Answer.create(req.body, (err, newAnswer) => {
            if (err) {
                return res.json(err);
            }
            return res.json(newAnswer);
        })
    },
    like: (req, res) => {
        Answer.like(req.params.id, req.session.user_id, (err) =>{
            return res.json(err);
        })
        return res.json({like: "you just like this answer"})
    }
}
