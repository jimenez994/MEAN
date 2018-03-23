const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    img: {
        type: String,
        default: "some image"
    },
    title: {
        type: String,
        default: "some title"
    },
    subTitle:{
        type: String,
        default: "some subtitle"
    },
    description: {
        type: String,
        default: "some description"
    },
    summary:{
        type: String,
        default: "some summary"
    },
    other: {
        type: String,
        default: "other"
    }
}, { timestamps: true })
const Project = mongoose.model("Project", ProjectSchema);