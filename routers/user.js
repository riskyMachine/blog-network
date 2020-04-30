const express = require('express')
const User = require('../models/user')
const auth = require('../auth/auth')
const multer = require('multer')
const sharp = require('sharp')
const Blog = require('../models/blog')



const router = new express.Router()

//SignUp route
router.post('/user', async (req,res) => {
    
    try{
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.cookie('user-token',token,{maxAge: 48*60*60*1000, signed: true})
        res.render('dashboard',{user})
    }catch(e){
        res.redirect('/user/dashboard')
    }
})

//Login route
router.post('/user/login', async (req,res) => {
    try {
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.cookie('user-token',token,{maxAge: 48*60*60*1000, signed: true})
        res.render('dashboard',{user})
    } catch (e) {
        res.redirect('/user/dashboard')
    }
})

router.get('/user/dashboard', auth ,  async (req,res) => {    
    try{
        if(req.user){
            res.render('dashboard',{user: req.user})
        }else{
            res.redirect('/')
        }
    }catch(e){
        res.redirect('/')
    }
})

router.get('/user/logout', auth, async(req,res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.clearCookie('user-token')
        res.redirect('/')
    }catch(e){
        res.status(500).send()
    }
})

//==================Image Upload======================
const upload = multer({
    limits: {
        fileSize: 2000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload jpg/jpeg/png file'))
        }
        cb(undefined,true)
    }
})

router.post('/user/avatar', auth, upload.single('avatar'),async (req,res) => {
    try{
        if(req.user){
            const buffer = await sharp(req.file.buffer).resize({width: 140, height: 160}).png().toBuffer()

            req.user.avatar = buffer
        
            await req.user.save() 
            res.redirect('/user/dashboard')
        }else{
            res.redirect('/')
        }
    }catch(e){
        console.log(e)
    }
},(error,req,res,next) => {
    res.status(400).send({error: error.message})
})

router.get('/user/me/removeAvatar', auth, async (req,res) => {
    if(req.user){
        req.user.avatar = undefined
        await req.user.save()
        res.redirect('/user/dashboard')
    }
    else{
        res.redirect('/users/loginPage')
    }
})

//============IMAGE URL route ======================


router.get('/user/:id/avatar', auth, async (req,res) => {
    try{
        if(req.user){
            const user =await User.findById(req.params.id)

            if(!user || !user.avatar){
                throw new Error()
            }
    
            res.set('Content-Type','image/png')            
            res.send(user.avatar)
        }
        else{
            res.redirect('/')
        }

    }catch(e){
        res.status(404).send()
    }
})


module.exports = router 