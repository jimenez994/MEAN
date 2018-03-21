const mongoose = require('mongoose');
const Image = mongoose.model('Image');
const User = mongoose.model('User');

module.exports = {
    createImage(req, res){
        var newImg = new Image(req.body);
        Image.create(newImg, (err, image) =>{
            if(err){
                return res.json(err);
            }else{
                return res.json({result: 'you successfully uploaded an image'})
            }
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
            return res.json({ result: 'you successfully daleted an image' })
        })
    }

}