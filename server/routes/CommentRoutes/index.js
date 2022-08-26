const router = require('express').Router();


const {createComment, getCommentsByPostId} = require('../../controllers/CommentController');


router.post('/comments', createComment);
router.get('/comments', getCommentsByPostId);

module.exports = router;