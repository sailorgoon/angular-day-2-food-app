const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

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