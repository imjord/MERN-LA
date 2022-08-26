const {Schema, model} = require('mongoose');



const PostSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String, 
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    MenuRef: {
        type: Schema.Types.ObjectId,
        ref: 'Menu'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Post = new model('Post', PostSchema);

module.exports = Post;