const User = require('../models/User');



const UserController = {
    // get users 
    getUsers(req,res) {
        User.find().populate('comments').then((person) => {
            res.json(person);
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