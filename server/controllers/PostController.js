const Post = require('../models/Post');

const PostController = {
    // get posts
    getPosts(req, res) {
        Post.find().populate({path: 'comments', model: 'Comment'}).then(posts => {
            res.json(posts);
        }
        ).catch(err => {
            res.json(err);
        }
        );
    },
    // create new post
    createPost(req, res) {
        const newPost = new Post({
            content: req.body.content,
            username: req.body.username
        });

        newPost.save().then(() => {
            res.json({
                message: 'Post created successfully'
            });
        }
        ).catch(err => {
            res.json(err);
        }
        );
    }
}

module.exports = PostController;