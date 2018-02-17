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
        type: Number,
        default: 0
    },
    status2: {
        type: Number,
        default: 0
    },
    status3: {
        type: Number,
        default: 0
    },
    

}, { timestamps: true });
mongoose.model("Player", PlayerSchema);
var Player = mongoose.model('Player');