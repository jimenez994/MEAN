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
    }
}, { timestamps: true })
const Link = mongoose.model("Link", LinkSchema);