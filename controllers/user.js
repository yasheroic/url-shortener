const User = require("../models/user.js")

async function handleUserSignup(req,res){

    const {name,email,password}= req.body
    await User.create({
        name,
        email,
        passwords
    })
    return res.render("home")
}

module.exports = {handleUserSignup,}