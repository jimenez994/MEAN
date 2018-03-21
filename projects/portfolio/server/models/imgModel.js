const mongoose = require("mongoose");
const ImgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'sir we need the name of the image' ]
    },
    src: {
        type: String,
        required: [true, 'sir you are missing the image']
    },
}, {timestamps: true});
const Image = mongoose.model('Image', ImgSchema);