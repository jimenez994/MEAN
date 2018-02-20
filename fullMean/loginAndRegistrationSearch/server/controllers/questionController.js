const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const User = mongoose.model('User');

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
        User.findById(req.session.user_id, (err, currentUser) => {
            if(err){
                return res.json(err)
            }
            var newQuestion = new Question(req.body);
            currentUser._question.push(newQuestion);
            Question.create(newQuestion, (err, question) => {
                if(err){
                    return res.json(err);
                }
                return res.json(question);
            })  
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
