const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
    img: {
        type: String,
        default: "some image"
    },
    title: {
        type: String,
        default: "some title"
    },
    description: {
        type: String,
        default: "some description"
    },
    other: {
        type: String,
        default: "other"
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        autopopulate: true
    }
}, { timestamps: true })
const Link = mongoose.model("Link", LinkSchema);