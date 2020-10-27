const express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
app = express(),
port = process.env.PORT || 8000,
api = require('./routes/api')
mongoose.connect('mongodb://localhost:bankDB', {useNewUrlParser:true, useUnifiedTopology:true})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', api)

app.listen(process.env.PORT || port, function(){
    console.log(`Server is up and running on port: ${port}`)
})