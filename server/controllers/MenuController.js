const Menu = require('../models/Menu');

const MenuController = {
    // get menu 
    getMenu(req,res) {
        Menu.find().then(menu => {
            res.json(menu);
            console.log(req.session);

        }).catch(err => {
            res.json(err);
        }) 
    }
};


module.exports = MenuController;