const {nanoid} = require('nanoid')
const URL = require('../models/url.js')

async function handleGenerateNewShortURL(req,res){
    const body = req.body
    const shortID = nanoid(8)
    if(!body.url){
        res.status(400).json({error:"URL is required"})
    }
    await URL.create({
        shortId: shortID,
        redirectURL:body.url,
        visitHistory:[],
    })
}

module.exports = {handleGenerateNewShortURL}