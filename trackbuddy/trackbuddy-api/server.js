const express =require('express');
const cors =require('cors');
require('dotenv').config();
const mongoose =require('mongoose') //connection
const url = process.env.ATLAS_URI

mongoose.connect(url,{useNewUrlParser:true})
const connection =mongoose.connection
connection.once('open',()=>{
    console.log("Mongoose is connected")
})
const app =express();
const port =process.env.PORT || 5000


app.use(cors()) //middleware
app.use(express.json());


app.listen(port,()=>{
    console.log('server is running:${port}')
})