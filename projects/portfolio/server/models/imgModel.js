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
    editable: {
        type: Boolean,
        required: false
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        autopopulate: true
    }
}, {timestamps: true});
const Image = mongoose.model('Image', ImgSchema);