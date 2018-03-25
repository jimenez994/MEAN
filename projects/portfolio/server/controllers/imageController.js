const mongoose = require('mongoose');
const Image = mongoose.model('Image');
const User = mongoose.model('User');

module.exports = {
    createImage(req, res){
        req.body._user = req.session.user_id;
        var newImg = new Image(req.body);
        User.findById(req.session.user_id, (err, currentUser) => {
            if(err){
                return res.json(err);
            }
            Image.create(newImg, (err, image) =>{
                if(err){
                    return res.json(err);
                }else{
                    currentUser._image.push(newImg);
                    User.findByIdAndUpdate(req.session.user_id, (currentUser), (err, res) => {
                        if(err){
                            return res.json(err);
                        }
                    })
                    return res.json({ result: "You successfully upload an image" });                                
                }                    
            })
        })
        
    },
    getImages(req, res) {
        Image.find({}, (err, images) => {
            if(err){
                return res.json(err);
            }else{
                return res.json(images);
            }
        })
    },
    deleteImage(req, res){
        Image.findByIdAndRemove({_id: req.params.id}, (err,image) =>{
            if(err){
                return res.json(err);
            }
            User.findByIdAndUpdate(req.session.user_id, {$pull: {_image: req.params.id}}, (err, res) => {
                if (err){
                    returnres.json(err);
                }
            });
            return res.json({ result: 'you successfully daleted an image' })
        })
    }

}