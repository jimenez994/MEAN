const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
    option: {
        type: String,
        required: [true,"must be at least 3 char"],
        minlength: [3,'must be at least 3 char']
    },
    vote: {
        type: Number,
        default: 0
    },
    poll: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Poll'
    }
}, { timestamps: true })

mongoose.model('Option', OptionSchema);