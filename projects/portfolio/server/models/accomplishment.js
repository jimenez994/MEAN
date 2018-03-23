const mongoose = require("mongoose");

const AccomplishmentSchema = new mongoose.Schema({
    company: {
        type: String,
        default: "some company"
    },
    img: {
        type: String,
        default: "some image"
    },
    title: {
        type: String,
        default: "some title"
    },
    subTitle: {
        type: String,
        default: "some subtitle"
    },
    description: {
        type: String,
        default: "some description"
    },
    summary: {
        type: String,
        default: "some summary"
    },
    other: {
        type: String,
        default: "other"
    }
}, { timestamps: true })
const Accomplishment = mongoose.model("Accomplishment", AccomplishmentSchema);