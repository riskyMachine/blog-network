const express = require('express')
const multer = require('multer')
const Image = require('../models/image')
const mime = require('mime-kind')
const fetch = require('node-fetch')
const base64ArrayBuffer = require('base64-arraybuffer')
const auth = require('../auth/auth')

const router = new express.Router()

//=======================IMAGE ROUTE===================================

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

router.post('/uploadImage', auth, upload.single('image') , async (req,res) => {
    const image = new Image({image: req.file.buffer})
 
    await image.save()
    const uploaderRes = {
        success: 1,
        file: {
            url:'/' + image._id + '/image'
        }
    }
    res.send(uploaderRes)
})

router.post('/fetchbyurl', auth , async (req,res) => {
  
    resData = await fetch(req.body.url,{ 
        mode: 'no-cors'
    })

    const data = await resData.arrayBuffer()
    const base64str = base64ArrayBuffer.encode(data) //Base64 string
    var base64buf = Buffer.from(base64str.toString('ascii'), 'base64') //Base64 Buffer
    const image = new Image({image: base64buf})
    await image.save()
    const uploaderRes = {
        success: 1,
        file: {
            url:'/' + image._id + '/image'
        }
    }
    res.send(uploaderRes)
})


//=========================Image URL Route==============================

router.get('/:id/image', async (req,res) => {
    try{
        if(req.params.id){
            const image =await Image.findById(req.params.id)
            const imageBuffer = image.image

            const mimeType = await mime(imageBuffer)
            res.set('Content-Type', mimeType.mime)+
            res.send(imageBuffer)
        }
    }catch(e){
        res.status(404).send()
    }
})

//========================Gallery Route===================================

router.get('/gallery', (req,res) => {
    if(!req.signedCookies['user-token']){
        res.render('gallery')
    }else{
        res.redirect('/user/dashboard')
    }
})

router.get('/galleryJson', async (req,res) => {
    const images = await Image.find().skip(Number(req.query.skip)).limit(9).sort({createdAt: -1})
    if(images.length){
        res.send(images)
    }else{
        res.send({msg: -1})
    }
})

router.get('/userGallery', auth, (req,res) => {
    if(req.user){
        res.render('userGallery',{user: req.user})
    }else{
        res.redirect('/gallery')
    }
})

module.exports = router