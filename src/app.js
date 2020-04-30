const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT
const hbs = require('hbs')
const bodyParser = require('body-parser')
const blogRouter = require('../routers/blog')
const userRouter = require('../routers/user')
const cookieParser = require('cookie-parser')
const imageRouter = require('../routers/image')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})


app.use(cookieParser(process.env.SIGNED_KEY))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(userRouter)
app.use(blogRouter)
app.use(imageRouter)

app.use(express.static('public'))


const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('*',(req,res) => {
    res.redirect('/')
})

app.listen(port, () => {
    console.log('Serving on port: ' + port)
})