const mongoose = require("mongoose");
const User = mongoose.model("User");
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');

module.exports = {
    create: (req, res) => {
        User.find({ email: req.body.email },(err, users) => {
            if (users.length > 0){
                return res.json(err);
            }else{
                User.create(req.body, (err, newUser) => {
                    if(err){
                        return res.json(err);
                    }
                    req.session.user_id = newUser._id;
                    return res.json(newUser);
                })
            }
        })
    },
    login: (req, res) => {
        if(req.body.email === '' || req.body.password === ''){
            return res.json({'error':'No login information entered'})
        }else{
            User.findOne({ email: req.body.email}, (err, user) => {
                if(user == null){
                    return res.json({'error':'Email not found'})
                }else{
                    if(User.schema.methods.match(req.body.password, user.password)){
                        req.session.user_id = user._id;
                        return res.json(user);
                    } else{
                        return res.json({'error':'Invalid password'});
                    }
                }
            })
        }
    },
    session: (req, res) => {
        User.findById(req.session.user_id, (err, user) => {
            if(err){
                return res.json(err)
            }
            return res.json(user);
        })
    },
    show: (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                return res.json(err)
            }
            return res.json(users);
        })
    },
    logout: (req, res) => {
        delete req.session.user_id;
        return res.json(err)
    },
    upload: (req, res) => {
        console.log(req.files.foo);
        // if (!req.files)
        //     return res.status(400).send('No files were uploaded.');

        // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        // let sampleFile = req.files.sampleFile;

        // // Use the mv() method to place the file somewhere on your server
        // sampleFile.mv('/somewhere/on/your/server/filename.jpg', (err) => {
        //     if (err)
        //         return res.status(500).send(err);

        //     res.send('File uploaded!');
        // });
    }
   
}