const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const foodSchema = new Schema({
    name: { type: String, required: true },
    deliciousnessrating: { type: Number, required: true },
    is_hot: { type: Boolean, required: true }
});

module.exports = mongoose.model('food', foodSchema);