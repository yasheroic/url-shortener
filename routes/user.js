const express = require("express")
const {handleUserSignup} = require("../controllers/user.js")

const router = express.Router()

router.post("/",handleUserSignup)

module.exports = router