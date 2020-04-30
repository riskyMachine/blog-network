const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req,res,next) => {
    try{
        const token = req.signedCookies['user-token'] || req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        const user = await User.findOne({_id: decoded._id,'tokens.token': token })
    
        req.token = token
        req.user = user
        next()
    }catch(e){
        res.redirect('/')
    }
}


module.exports = auth