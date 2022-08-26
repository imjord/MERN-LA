const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost/laLunaBros"
);


module.exports = mongoose.connection;