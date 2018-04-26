const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true})); 

// const food = [
//     {
//         name: 'tomato',
//         deliciousnessrating: 7,
//         is_hot: false
//     }
// ];

// router.get('/', (req, res) => {
//     console.log(food)
//     res.send(food);
// });

// router.post('/', (req, res) => {
//     console.log(req.body.data);
// });

module.exports = router;