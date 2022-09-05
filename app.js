const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const router = require('./routes')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const connect  = ()=>{
    return mongoose.connect("mongodb+srv://boat123:boat123@cluster0.zcqewyi.mongodb.net/?retryWrites=true&w=majority")
}
require("./routes")(app);
app.listen(1900,()=>{
    connect()
    console.log("db connected")
})

