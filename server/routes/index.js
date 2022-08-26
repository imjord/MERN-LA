const router = require('express').Router();
const UserRoutes = require('./UserRoutes');
const CommentRoutes = require('./CommentRoutes');
const PostRoutes = require('./PostRoutes');
const MenuRoutes = require('./MenuRoutes');

router.use("/", UserRoutes);
router.use("/", CommentRoutes);
router.use("/", PostRoutes);
router.use("/", MenuRoutes);




module.exports = router;