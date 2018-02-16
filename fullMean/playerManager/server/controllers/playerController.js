const mongoose = require("mongoose");
const Player = mongoose.model("Player");

class PlayerController {
    create(req, res){
        console.log(req.body);
        Player.create(req.body, (err, player) => {
            if (err) {
                return res.json("sorry the player could not be created");
            }
            return res.json(req.body);
        })
    }
    singlePlayer(req, res){
        Player.findById(req.params.id, (err, player) => {
            if(err){
                return res.json(err);
            }
            return res.json(player);
        })
    }
    show(req, res){
        Player.find({}, function (err, players) {
            if (err) {
                return res.json(err);
            }
            return res.json(players);
        })
    }
    update(req, res){
        Player.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true }, (err, player) => {
            if(err){
                return res.json(err);
            }
            return res.json(player);
        })
    }
    destroy(req, res){
        Player.findByIdAndRemove(req.params.id, (err, player) => {
            if(err){
                return res.json(err);
            }
            return res.json(player);
        })
    }
}

module.exports = new PlayerController();