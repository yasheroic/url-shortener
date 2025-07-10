const {getUser} = require("../services/auth.js")
async function restrictToLoggedinUserOnly(req,res,next){
    const userUid = req.cookie.uid
    if(!userUid) return res.redirect('/login')
    const user = getUser(userUid)

    if(!user) return res.redirect("/login")
    
    req.user = user;
    next();
    
}