const express = require('express')
const router = express.Router()
const {handleGenerateNewShortURL} = require('../controllers/url.js')

router.post('/',handleGenerateNewShortURL)

module.exports= router;