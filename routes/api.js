const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')

router.get('/transactions', async (req, res) => {
    const transactions = await Transaction.find({})
    res.send(transactions)
})
  
router.post('/transaction', async (req, res) => {
    const newTransaction = new Transaction(req.body)
    const saveTransaction = await newTransaction.save()
    res.send(saveTransaction)
})

router.delete('/transaction/:id', async (req , res) =>{
    const removeTransaction = await Transaction.findByIdAndDelete(req.params.id)
    res.send(removeTransaction)
})

router.get('/catagories', async (req, res) => {
    const catagories = await Transaction.aggregate([
        {$group: {_id: "$catagory", total: {$sum: "$amount"}} }
        ])
        res.send(catagories)
})


module.exports = router
