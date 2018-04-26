const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/kitchen'
const Food = require('../models/food.schema');


mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`)
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error')
});


router.get('/', (req, res) => {
    Food.find({})
    .then((databack) => {
        console.log(`data from databse: ${databack}`);
        res.send(databack);
    })
    .catch((error) => {
        console.log(`error with Food.find: ${error}`);
        res.sendStatus(200);
    })
});

router.post('/', (req, res) => {
    const foodToAdd = (req.body)
    console.log(req.body);
    res.sendStatus(200);
    food.push(foodToAdd);       
});

module.exports = router;