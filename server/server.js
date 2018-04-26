const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended:true})); 

const foodRouter = require('./routes/food.route');

app.use('/food/', foodRouter);


app.listen(PORT, function(){
console.log('listening on 5000');
});