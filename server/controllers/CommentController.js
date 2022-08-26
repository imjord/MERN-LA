const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');

const CommentController = {
    // get all comments 
    getAllComments(req,res){
        Comment.find().then(comment => {
            res.json(comment);
        })
    },
    // get comments by post id
    getCommentsByPostId(req, res) {
        Comment.findById(req.params.id).populate('user').then((comment) => {
            res.json(comment);
        }).catch(err => {
            res.json(err);
        })
    },
    // create new comment 
    createComment(req, res) {
        const newComment = new Comment({
            username: req.body.username,
            content: req.body.content,
            PostRef: req.body.PostRef
        });

        newComment.save().then(() => {
            res.json({
                message: 'Comment created successfully'
            });
        }).catch(err => {
            res.json(err);
        });
    }
}

module.exports = CommentController;