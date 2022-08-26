const User = require('../models/User');



const UserController = {
    // get users 
    getUsers(req,res) {
        User.find().populate({path: 'comments', model: 'Comment'}).populate({path: 'posts', model: 'Post'}).then((user) => {
            res.json(user);
        }).catch(err => {
            res.json(err);
        })
    },
    // create new user 
    createUser(req,res) {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });

        newUser.save().then(() => {
            res.json({
                message: 'User created successfully'
            });
        }).catch(err => {
            res.json(err);
        });
    }
};

module.exports = UserController;