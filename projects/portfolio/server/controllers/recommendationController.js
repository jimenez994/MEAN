const mongoose = require('mongoose');
const Recommendation = mongoose.model('Recommendation');
const User = mongoose.model("User");

module.exports = {
    show(req, res) {
        Recommendation.find({}, (err, recommendations) => {
            if (err){
                return res.json(err);
            }
            return res.json(recommendations);
        });
    },
    create(req, res){
        req.body._user = req.session.user_id;
        var newRecommendation = new Recommendation(req.body);
        User.findById(req.session.user_id, (err, currentUser) => {
            if (err){
                return res.json(err);
            }
            Recommendation.create(newRecommendation, (err, recommendation) => {
                if (err){
                    return res.json(err);
                }else{
                    currentUser._recommentation.push(newRecommendation);
                    User.findByIdAndUpdate(req.session.user_id, (currentUser), (err, res) => {
                        if(err){
                            return res.json(err);
                        }
                    });
                    return res.json(recommendation);
                }
            });
        });
    },
    showOne(req, res){
        Recommendation.findById(req.params.id, (err, recommendation) => {
            if(err){
                return res.json(err);
            }
            return res.json(recommendation);
        });
    },
    update( req, res){
        Recommendation.findByIdAndUpdate(req.params.id, req.body, (err, recommendation) => {
            if (err){
                return res.json(err);
            }
            return res.json({result: "yoiu have successfully updated the recommendation"});
        });
    },
    delete(req, res){
        Recommendation.findByIdAndRemove(req.params.id, (err, recommendation) => {
            if (err) {
                return res.json(err);
            }
            User.findByIdAndUpdate(req.session.user_id, {$pull: {  _recommentation: req.prams.id }}, (err, result) => {
                if (err) {
                    return res.json(err);
                }
            });
            return res.json({ result: "You successfully deleted the recommendation" });
        });
    }
}