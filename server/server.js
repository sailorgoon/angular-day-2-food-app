const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const foodRouter = require('./routes/food.route');
// app.use(bodyParser.urlencoded({extended:true})); DON'T NEED THIS
app.use(bodyParser.json());

app.use(express.static('server/public'));





app.use('/food', foodRouter);



app.listen(PORT, function(){
console.log('listening on 5000');
});