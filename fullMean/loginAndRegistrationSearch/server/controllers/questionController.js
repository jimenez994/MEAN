const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const User = mongoose.model('User');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

module.exports = {
    show: (req, res) => {
        Question.find({}, (err, questions) => {
            if(err){
                return res.json(err);
            }
            return res.json(questions);
        })
    },
    create: (req, res) => {
        req.body._user = req.session.user_id
        Question.create(req.body , (err, newQuestion) => {
            if(err){
                return res.json(err);
            }
            return res.json(newQuestion);
        })
    },
    findOne: (req, res) => {
        Question.findById(req.params.id).deepPopulate('_answer').exec((err, question) => {
            if(err){
                return res.json(err)
            }
            return res.json(question);
        })
    }

}
