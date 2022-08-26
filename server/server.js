// imports
const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./config/connection");
const routes = require("./routes/index");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    cookie: {
        httpOnly: true,
        maxAge: 3600000
    }
}));
app.use(cookieParser("secret"));


// routes
app.use('/api', routes);

// start server
db.once("open", () => {
    console.log("connected to mongoose db");
    app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    });
});