const express = require('express');
const urlRoute = require('./routes/url.js')
const {connectToMongoDB} = require('./connect.js')

const PORT =8001
const app = express()
app.use(express.json())

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>{
    console.log("MongoDB Connected");
})

app.use('/url',urlRoute)


app.listen(PORT,()=>console.log(`App is listening on PORT: ${PORT}`))
