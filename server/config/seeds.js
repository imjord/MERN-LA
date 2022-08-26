const mongoose = require('mongoose');
const Menu = require('../models/Menu');

mongoose.connect(
    "mongodb://localhost/laLunaBros"
).then(() => {
    console.log("Menu seeded");
}).catch(err => {
    console.log(err);
});

const seedMenu = [
    // STARTERS
    {
        category: "Great Starters",
        name: "Quesadilla",
        description: "NONE ATM"
    },
    {
        category: "Great Starters",
        name: "Nachos",
        description: "NONE ATM"
    },
    {
        category: "Great Starters",
        name: "Guacamole Salad",
        description: "NONE ATM"
    },
    // BREAKFAST
    {
        category: "Breakfast",
        name: "Steak and Eggs",
        description: "NONE ATM"
    },
    {
        category: "Breakfast",
        name: "Breakfast Burrito",
        description: "NONE ATM"
    },
    {
        category: "Breakfast",
        name: "Huevos Rancheros",
        description: "NONE ATM"
    },
    // LUNCH AND DINNER
    {
        category: "Lunch and Dinner",
        name: "CheeseBurger",
        description: "NONE ATM"
    },
    {
        category: "Lunch and Dinner",
        name: "Combo Fajitas",
        description: "NONE ATM"
    },
    {
        category: "Lunch and Dinner",
        name: "Chili Relleno",
        description: "NONE ATM"
    },
];


const seedDB = async () => {
    await Menu.deleteMany({});
    await Menu.insertMany(seedMenu);
}

seedDB().then(() => {
    mongoose.connection.close();
});