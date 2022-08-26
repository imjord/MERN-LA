const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    PostRef: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
});

const Comment = new model('Comment', CommentSchema);

module.exports = Comment;