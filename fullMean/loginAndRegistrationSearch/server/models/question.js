const mongoose = require("mongoose");
// const autopopulate = require('mongoose-autopopulate');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

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
        // autopopulate: true
    }],
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        // autopopulate: true
    }
    
}, { timestamps: true });

// QuestionSchema.plugin(autopopulate);
QuestionSchema.plugin(deepPopulate);

const Question = mongoose.model("Question", QuestionSchema);