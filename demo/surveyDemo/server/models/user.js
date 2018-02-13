var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

mongoose.model('User', UserSchema);