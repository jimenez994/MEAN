var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'Title is required']
    },
    content: {
        type: String,
        require: [true, 'Content is required']
    }
});

module.exports = mongoose.model('Post', PostSchema);