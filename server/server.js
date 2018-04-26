const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());

app.use(express.static('server/public'));



const food = [
    // {
    //     name: 'tomato',
    //     deliciousnessrating: 7,
    //     is_hot: false
    // }
];

// app.use('/food');

app.get('/food', (req, res) => {
    console.log(food)
    res.send(food);
});

app.post('/food', (req, res) => {
    // const foodToAdd = (req.body)
    console.log(req.body);
    res.sendStatus(200);
    // food.push(angular.copy(foodToAdd));
    //     console.log(req.body.food);
});

app.listen(PORT, function(){
console.log('listening on 5000');
});