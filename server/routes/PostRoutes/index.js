const router = require('express').Router();
const {createPost, getPosts} = require('../../controllers/PostController');



router.post('/posts', createPost);
router.get('/posts', getPosts);


module.exports = router;