const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/kitchen'

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`)
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error')
})
const food = [];

router.get('/', (req, res) => {
    console.log(food)
    res.send(food);
});

router.post('/', (req, res) => {
    const foodToAdd = (req.body)
    console.log(req.body);
    res.sendStatus(200);
    food.push(foodToAdd);       
});

module.exports = router;