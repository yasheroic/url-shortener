const {getUser} = require("../services/auth.js")

function checkForAuthentication(req,res,next){
    const authorizationHeaderValue = req.headers.authorization
    req.user = null
    if(!authorizationHeaderValue || !authorizationHeaderValue.startsWith("Bearer")) {
        return next()
    }
    const token = authorizationHeaderValue.split("Bearer ")[1]
    const user = getUser(token)
    req.user = user
    next()
}

function restrictTo(roles = []){
    return function(req,res,next){
        if(!req.user){
            return res.redirect("/login")
        }
        if(!roles.includes(req.user.roles)){
            res.end("Unauthorised")
        }
        return next()
    }

}

module.exports = {
    checkForAuthentication,restrictTo
}