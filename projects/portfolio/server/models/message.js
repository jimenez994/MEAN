const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [1, "Email must be between 1-255 characters"],
        maxlength: [255, "Email must be between 1-255 characters"],
        validate: {
            validator: function (value) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            },
            message: "Invalid E-mail format"
        }
    },

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [1, "First Name must be between 1-255 characters"],
        maxlength: [255, "First Name must be between 1-255 characters"],
    },

    text: {
        type: String,
        required: [true, "Message is required"],
        minlength: [1, "Last Name must be between 1-255 characters"],
        maxlength: [255, "Last Name must be between 1-255 characters"],
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        autopopulate: true
    }
}, { timestamps: true })
const Message = mongoose.model("Message", MessageSchema);