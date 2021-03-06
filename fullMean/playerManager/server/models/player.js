const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'must have a name']
    },
    position: {
        type: String,
        require: [true, "must have a position "]
    },
    status: {
        type: String,
        default: "playing"
    },
    game1: {
        type: String,
    }
    

}, { timestamps: true });
mongoose.model("Player", PlayerSchema);
var Player = mongoose.model('Player');