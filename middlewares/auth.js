const {getUser} = require("../services/auth.js")

function checkForAuthentication(req,res,next){
    const tokenCookie = req.cookies?.token
    req.user = null
    if(!tokenCookie) {
        return next()
    }
    const token = tokenCookie
    const user = getUser(token)
    req.user = user
    next()
}

function restrictTo(roles = []){
    return function(req,res,next){
        if(!req.user){
            return res.redirect("/login")
        }
        if(!roles.includes(req.user.role)){
            return res.end("Unauthorised")
        }
        return next()
    }

}

module.exports = {
    checkForAuthentication,restrictTo
}