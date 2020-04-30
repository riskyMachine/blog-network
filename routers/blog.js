const express = require('express')
const User = require('../models/user')
const Blog = require('../models/blog')
const auth = require('../auth/auth')


const router = new express.Router()


//=====================Blog View Rendering=================================================

router.get('/', (req,res) => {
    try{
        if(!req.signedCookies['user-token']){
            res.render('index')
        }else{
            res.redirect('/user/dashboard')
        }
    }
    catch(e){
        console.log(e)
        res.redirect('/')
    }
})

router.get('/newBlog', auth , (req,res) => {
    if(req.user){
        res.render('newBlog',{user: req.user})
    }else{
        res.redirect('/')
    }
})

router.get('/userblogs', auth, (req,res) => {
    if(req.user){
        res.render('userBlogs',{user: req.user})
    }else{
        res.redirect('/')
    }
})

//=====================BLOG FETCH ROUTE=====================================

router.get('/blogs', auth, async (req,res) => {
    if(req.user){
        const user =await User.findById(req.user._id);
        await user.populate({
            path: 'blogs',
            options:{
                limit:6,
                skip: Number(req.query.skip),
                sort:{
                    createdAt: -1
                }
            }
        }).execPopulate()
        if(user.blogs.length){
            // user.skipped = req.query.skip 
            res.send(user.blogs)
        }else{
            res.send({msg: -1})
       }
    }else{
        res.redirect('/')
    }
})

router.get('/allBlogs', async (req,res) => {
    const blogs = await Blog.find().skip(Number(req.query.skip)).limit(6).sort({createdAt: -1})
    if(blogs.length){
        // user.skipped = req.query.skip 
        res.send(blogs)
    }else{
        res.send({msg: -1})
    }
})

//==========================New Blog Post====================================

router.post('/newBlog', auth, async(req,res) => {
    try{
        const blog = new Blog({author: req.user._id, blog: req.body})
        await blog.save()
        res.redirect('/userblogs')
    }catch(e){ 
        console.log(e)
    }
})

//========================Blog View======================================

router.get('/:id/editBlog',auth, async(req,res) => {
    if(req.user){
        const blog = await Blog.findById(req.params.id)
        const id = req.params.id
        res.render('editBlog',{id,user: req.user})
    }else{
        res.redirect('/')
    }
})

router.get('/:id/blog', async(req,res) => {
    const blog = await Blog.findById(req.params.id)
    const id = req.params.id
    res.render('blogView',{id})
})

router.get('/:id/genView', async(req,res) => {
    if(!req.signedCookies['user-token']){
        const blog = await Blog.findById(req.params.id)
        const id = req.params.id
        res.render('genView',{id})
    }else{
        res.redirect('/user/dashboard')
    }
})

router.get('/:id/blogJson', async(req,res) => {
    const blog = await Blog.findById(req.params.id)
    res.send(blog)
})





















// //=======================IMAGE ROUTE===================================

// const upload = multer({
//     limits: {
//         fileSize: 2000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
//             return cb(new Error('Please upload jpg/jpeg/png file'))
//         }
//         cb(undefined,true)
//     }
// })

// router.post('/uploadImage', upload.single('image') , async (req,res) => {
//     const image = new Image({image: req.file.buffer})
 
//     await image.save()
//     const uploaderRes = {
//         success: 1,
//         file: {
//             url:'/' + image._id + '/image'
//         }
//     }
//     res.send(uploaderRes)
// })

// router.post('/fetchbyurl', async (req,res) => {
  
//     resData = await fetch(req.body.url,{ 
//         mode: 'no-cors'
//     })

//     const data = await resData.arrayBuffer()
//     const base64str = base64ArrayBuffer.encode(data) //Base64 string
//     var base64buf = Buffer.from(base64str.toString('ascii'), 'base64') //Base64 Buffer
//     const image = new Image({image: base64buf})
//     await image.save()
//     const uploaderRes = {
//         success: 1,
//         file: {
//             url:'/' + image._id + '/image'
//         }
//     }
//     res.send(uploaderRes)
// })


// //=========================Image URL Route==============================

// router.get('/:id/image', async (req,res) => {
//     try{
//         if(req.params.id){
//             const image =await Image.findById(req.params.id)
//             const imageBuffer = image.image

//             const mimeType = await mime(imageBuffer)
//             res.set('Content-Type', mimeType.mime)+
//             res.send(imageBuffer)
//         }
//     }catch(e){
//         res.status(404).send()
//     }
// })

// //======================================================================

module.exports = router