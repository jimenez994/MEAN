const mongoose = require('mongoose');
const Image = mongoose.model('Image');

module.exports = {
    createImg(req, res){
        var newImg = new Image(req.body);
        console.log(newImg)
        Image.create(newImg, (err, image) => {
            if(err){
                return res.json(err);
            }else{
                return res.json({ result:'you successfully uploaded an image'})
            }
        })
    },
    getImgs(req, res){
        Image.find({}, (err, images) => {
            if(err){
                return res.json(err);
            }else{
                return res.json(images)
            }
        })
    },
    deleteImg(req, res){
        Image.findByIdAndRemove({_id: req.params.id}, (err, image) => {
            if(err){
                return res.json(err);
            }
            return res.json({ result: 'you successfully deleted an image' });
        })
    }
}