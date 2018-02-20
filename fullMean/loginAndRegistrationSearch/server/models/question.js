const mongoose = require("mongoose");
const autopopulate = require('mongoose-autopopulate');

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question myst be at leart 10 characters"],
        minlength: [1, "Question myst be at leart 10 characters"]
    },
    description: {
        type: String
    },
    _answer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        autopopulate: true
    }],
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        autopopulate: true
    }
    
}, { timestamps: true });

QuestionSchema.plugin(autopopulate);

const Question = mongoose.model("Question", QuestionSchema);