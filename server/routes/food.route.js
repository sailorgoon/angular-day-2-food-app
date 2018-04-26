const express = require('express');
const router = express.Router();

const food = [
    {
        name: 'tomato',
        deliciousnessrating: 7,
        is_hot: 'no'
    }
];

router.get('/', (req, res) => {
    console.log(food)
    res.send(food);
});

module.exports = router;