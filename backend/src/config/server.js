const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
//const allowCors = require('./cors')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server