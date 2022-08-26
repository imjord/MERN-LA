const router = require('express').Router();


const {createComment, getCommentsByPostId, getAllComments} = require('../../controllers/CommentController');


router.post('/comments', createComment);
router.get('/comments/:id', getCommentsByPostId);
router.get('/comments/', getAllComments);
module.exports = router;