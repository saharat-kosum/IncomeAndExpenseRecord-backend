const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/Router')
const cors = require('cors')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log('Connect to MongoDB'))
.catch((err)=> console.log(err))

app.use(express.urlencoded({extended:false}))
app.use(router)

app.listen(PORT, ()=> console.log(`Server on ${PORT}`))