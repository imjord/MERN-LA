const {Schema, model} = require('mongoose');


const MenuSchema = new Schema({
    category: {
        type: String, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description:{
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
    
});

const Menu = new model('Menu', MenuSchema);

module.exports = Menu;