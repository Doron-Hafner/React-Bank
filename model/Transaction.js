const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    amount: Number,
    vendor: String,
    catagory: String
})

const transaction = mongoose.model('transaction', TransactionSchema)

module.exports = transaction