const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    img: {
        type: String,
        default: "some image"
    },
    title:{
        type: String,
        default: "some title"
    },
    description:{
        type: String,
        default: "some description"
    },
    other:{
        type: String,
        default: "other"
    }
}, { timestamps: true })
const Skill = mongoose.model("Skill", SkillSchema);