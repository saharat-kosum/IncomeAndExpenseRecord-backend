const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
    text:String,
    amount:Number
})

module.exports = mongoose.model('Record', recordSchema)