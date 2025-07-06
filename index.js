const express = require('express');
const urlRoute = require('./routes/url.js')

const PORT =8001
const app = express()

app.use('/url',urlRoute)


app.listen(PORT,()=>console.log(`App is listening on PORT: ${PORT}`))
