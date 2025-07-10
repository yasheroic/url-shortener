const express = require("express")
const URL = require("../models/url")

const router = express.Router()

router.get("/", async(req,res)=>{
    if(!req.user){
        res.redirect("/login")
    }
    const allUrl = await URL.find({createdBy:req.user._id})
    return res.render("home",{
        urls:allUrl
    })
})

router.get("/signup", (req,res)=>{
    res.render("signup")
})

router.get("/login",(req,res)=>{
    res.render("login")
})

module.exports = router