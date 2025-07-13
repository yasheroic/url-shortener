const express = require("express")
const URL = require("../models/url")
const { restrictTo } = require("../middlewares/auth.js")

const router = express.Router()

router.get("/admin/urls", restrictTo(['ADMIN']),  async(req,res)=>{
    const allUrl = await URL.find({})
    return res.render("home",{
        urls:allUrl
    })
})

router.get("/",restrictTo(["NORMAL","ADMIN"]), async(req,res)=>{
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