const mongoose = require("mongoose");

const ImgSchema = new mongoose.Schema({
    src: {
        type: String,
        required: [true, 'Dude? you are missing the img']
    }
}, {timestamps: true});

const Image = mongoose.model('Image', ImgSchema);